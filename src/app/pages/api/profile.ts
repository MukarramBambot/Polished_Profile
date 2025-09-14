import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "Not authenticated" });

  let payload: any;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (req.method === "GET") {
    const profile = await prisma.profile.findUnique({ where: { userId: payload.id } });
    return res.status(200).json(profile);
  }

  if (req.method === "POST") {
    const { bio, avatarUrl, phone, address } = req.body;
    const profile = await prisma.profile.upsert({
      where: { userId: payload.id },
      update: { bio, avatarUrl, phone, address },
      create: { userId: payload.id, bio, avatarUrl, phone, address }
    });
    return res.status(200).json(profile);
  }

  res.status(405).end();
}