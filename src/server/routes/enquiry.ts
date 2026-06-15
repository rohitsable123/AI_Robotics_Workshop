import { Router, Request, Response } from 'express';
import mongoose from 'mongoose';
import { Enquiry } from '../models/Enquiry.js';

const router = Router();

// In-memory array for mock storage when database is not connected
interface MockEnquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

const mockEnquiries: MockEnquiry[] = [];
let mockIdCounter = 1;

// Regex for basic validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[6-9]\d{9}$/; // Starts with 6-9, 10 digits

router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone } = req.body;

    // Validate presence
    const errors: { [key: string]: string } = {};

    if (!name || typeof name !== 'string' || name.trim() === '') {
      errors.name = 'Name is required and cannot be empty.';
    } else if (name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long.';
    }

    if (!email || typeof email !== 'string' || email.trim() === '') {
      errors.email = 'Email is required and cannot be empty.';
    } else if (!EMAIL_REGEX.test(email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!phone || typeof phone !== 'string' || phone.trim() === '') {
      errors.phone = 'Phone number is required and cannot be empty.';
    } else {
      const cleanPhone = phone.trim().replace(/[-\s]/g, '');
      if (!PHONE_REGEX.test(cleanPhone)) {
        errors.phone = 'Please provide a valid 10-digit Indian phone number (starts with 6-9).';
      }
    }

    // If validation fails
    if (Object.keys(errors).length > 0) {
      res.status(400).json({
        success: false,
        message: 'Validation failed. Please correct the fields below.',
        errors,
      });
      return;
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const cleanPhone = phone.trim().replace(/[-\s]/g, '');

    const isDbConnected = mongoose.connection.readyState === 1;

    if (isDbConnected) {
      const newEnquiry = new Enquiry({
        name: trimmedName,
        email: trimmedEmail,
        phone: cleanPhone,
      });
      await newEnquiry.save();

      res.status(201).json({
        success: true,
        message: 'Enquiry submitted successfully! Saved to Database.',
        data: {
          id: newEnquiry._id,
          name: newEnquiry.name,
          email: newEnquiry.email,
          phone: newEnquiry.phone,
          createdAt: newEnquiry.createdAt,
        },
      });
    } else {
      const mockEnquiry: MockEnquiry = {
        id: mockIdCounter++,
        name: trimmedName,
        email: trimmedEmail,
        phone: cleanPhone,
        createdAt: new Date(),
      };
      mockEnquiries.push(mockEnquiry);

      console.log('📝 Saved enquiry to In-Memory storage (Mock Mode):', mockEnquiry);

      res.status(201).json({
        success: true,
        message: 'Enquiry submitted successfully! (Stored in Mock/In-Memory Mode)',
        data: mockEnquiry,
      });
    }
  } catch (error) {
    console.error('Error handling /api/enquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
    });
  }
});

// Helper endpoint to check enquiries
router.get('/', (req: Request, res: Response) => {
  const isDbConnected = mongoose.connection.readyState === 1;
  if (isDbConnected) {
    Enquiry.find()
      .sort({ createdAt: -1 })
      .then((data) => res.json({ success: true, source: 'database', data }))
      .catch((err) => res.status(500).json({ success: false, error: err.message }));
  } else {
    res.json({ success: true, source: 'mock_memory', data: [...mockEnquiries].reverse() });
  }
});

export default router;
