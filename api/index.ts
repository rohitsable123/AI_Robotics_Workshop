import app from '../src/server/app.js';
import { connectDB } from '../src/server/config/db.js';

export default async (req: any, res: any) => {
  await connectDB();
  return app(req, res);
};
