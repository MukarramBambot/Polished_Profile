import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "Not authenticated" });

  try {
    const payload: any = jwt.verify(token, JWT_SECRET);
    if (payload.role !== "ADMIN") throw new Error("Not admin");
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true, role: true, createdAt: true, profile: true }
    });
    res.status(200).json(users);
  } catch {
    res.status(401).json({ message: "Unauthorized" });
  }
}