import app from './app';
import { connectDB } from './config/db';

const port = process.env.PORT || 5000;

// Start Server locally
const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`⚡️ Express Server is running on http://localhost:${port}`);
  });
};

startServer();
