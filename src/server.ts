import { VercelRequest, VercelResponse } from "@vercel/node";
import app from "./index";

const server = app;

// Vercel's serverless function handler
export default (req: VercelRequest, res: VercelResponse) => {
  server(req as any, res as any); // Cast for compatibility
};
