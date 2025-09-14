import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "verysecretkey";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "Not authenticated" });

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    res.status(200).json(payload);
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}