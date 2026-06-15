import app from '../src/server/app';
import { connectDB } from '../src/server/config/db';

export default async (req: any, res: any) => {
  await connectDB();
  return app(req, res);
};
