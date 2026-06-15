import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import enquiryRouter from './routes/enquiry.js';

// Load environment variables
dotenv.config();

const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Body parser middleware
app.use(express.json());

// API route
app.use('/api/enquiry', enquiryRouter);

// Serve the React client build files directly in production
const clientBuildPath = path.join(process.cwd(), 'dist/client');
app.use(express.static(clientBuildPath));

// Fallback route: serve index.html in production or health check in development
app.get('*', (req: Request, res: Response) => {
  const indexPath = path.join(clientBuildPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.json({
      status: 'ok',
      message: 'AI & Robotics Summer Workshop API is up and running!',
      mode: process.env.MONGO_URI ? 'database' : 'mock-in-memory'
    });
  }
});

export default app;
