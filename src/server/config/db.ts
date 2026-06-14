import mongoose from 'mongoose';

export const connectDB = async (): Promise<boolean> => {
  const mongoURI = process.env.MONGO_URI;

  if (!mongoURI) {
    console.log('⚠️  No MONGO_URI provided in environment. Running backend in mock/in-memory mode.');
    return false;
  }

  try {
    await mongoose.connect(mongoURI);
    console.log('🚀 MongoDB connected successfully!');
    return true;
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    console.log('⚠️  Falling back to mock/in-memory storage for enquiries.');
    return false;
  }
};
