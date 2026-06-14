import React, { useState } from 'react';
import { User, Mail, Phone, ArrowRight, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');

  // Handle inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear validation error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Client-side validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/; // Starts with 6-9, standard 10 digit Indian number

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Strip spaces or dashes for checking standard 10-digit numbers
    const cleanPhone = formData.phone.trim().replace(/[-\s]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number (starts with 6-9).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    setServerMessage('');

    try {
      // Relative path works natively due to Vite proxy in dev and same-origin in prod
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setServerMessage(data.message || 'Thank you for your interest! We will contact you soon.');
        // Reset form
        setFormData({ name: '', email: '', phone: '' });
      } else {
        setStatus('error');
        setServerMessage(data.message || 'Something went wrong. Please check your details.');
        
        // If there are specific server field validation errors, set them
        if (data.errors) {
          setErrors(data.errors);
        }
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setServerMessage('Failed to connect to the server. Please check if the backend is running.');
    }
  };

  return (
    <section id="register" className="py-20 bg-gradient-to-b from-stone-50/50 to-white relative">
      {/* Decorative patterns */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-0 w-64 h-64 bg-brand-purple-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl mx-auto px-4 sm:px-6 relative">
        <div className="bg-white border-2 border-brand-purple-100 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          
          {/* Accent Line top */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-purple-500 via-brand-pink-500 to-brand-orange-500" />
          
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-brand-purple-900 mb-2">Book Your Spot!</h2>
            <p className="text-sm text-brand-purple-900/60 font-light">
              Submit your enquiry below and our academic counselor will call you within 24 hours with batch timings & details.
            </p>
          </div>

          {status === 'success' ? (
            <div className="text-center py-8 px-4 bg-brand-teal-50 rounded-2xl border border-brand-teal-200 animate-float-slow">
              <CheckCircle2 className="w-16 h-16 text-brand-teal-500 mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-brand-purple-900 mb-2">Awesome!</h3>
              <p className="text-brand-purple-900/80 mb-6 leading-relaxed">
                {serverMessage}
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="px-6 py-2.5 bg-brand-purple-600 hover:bg-brand-purple-500 text-white font-display font-medium rounded-xl transition-colors"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-brand-purple-900 mb-2">
                  Child's / Parent's Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-purple-900/40">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className={`block w-full pl-11 pr-4 py-3.5 border-2 rounded-2xl text-brand-purple-950 placeholder-brand-purple-900/30 focus:outline-none transition-all ${
                      errors.name 
                        ? 'border-brand-pink-500 focus:border-brand-pink-500 focus:ring-1 focus:ring-brand-pink-500' 
                        : 'border-brand-purple-100 focus:border-brand-purple-500 focus:ring-1 focus:ring-brand-purple-500'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1.5 text-xs text-brand-pink-600 font-medium flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-brand-purple-900 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-purple-900/40">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className={`block w-full pl-11 pr-4 py-3.5 border-2 rounded-2xl text-brand-purple-950 placeholder-brand-purple-900/30 focus:outline-none transition-all ${
                      errors.email 
                        ? 'border-brand-pink-500 focus:border-brand-pink-500 focus:ring-1 focus:ring-brand-pink-500' 
                        : 'border-brand-purple-100 focus:border-brand-purple-500 focus:ring-1 focus:ring-brand-purple-500'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1.5 text-xs text-brand-pink-600 font-medium flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-brand-purple-900 mb-2">
                  Contact Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-purple-900/40">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className={`block w-full pl-11 pr-4 py-3.5 border-2 rounded-2xl text-brand-purple-950 placeholder-brand-purple-900/30 focus:outline-none transition-all ${
                      errors.phone 
                        ? 'border-brand-pink-500 focus:border-brand-pink-500 focus:ring-1 focus:ring-brand-pink-500' 
                        : 'border-brand-purple-100 focus:border-brand-purple-500 focus:ring-1 focus:ring-brand-purple-500'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-brand-pink-600 font-medium flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> {errors.phone}
                  </p>
                )}
              </div>

              {/* General server error message */}
              {status === 'error' && (
                <div className="p-4 bg-brand-pink-50 border border-brand-pink-200 rounded-2xl flex items-start space-x-2.5">
                  <AlertTriangle className="w-5 h-5 text-brand-pink-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-brand-pink-700 leading-normal">{serverMessage}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full inline-flex items-center justify-center px-6 py-4 bg-brand-purple-600 hover:bg-brand-purple-500 disabled:bg-brand-purple-400 text-white font-display text-lg font-semibold rounded-2xl border-b-4 border-brand-purple-800 hover:translate-y-[-2px] active:translate-y-[2px] disabled:translate-y-0 disabled:border-b-0 transition-all cursor-pointer"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting Enquiry...
                  </>
                ) : (
                  <>
                    Submit Enquiry
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};
