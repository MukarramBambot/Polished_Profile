import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "Not authenticated" });

  try {
    const payload: any = jwt.verify(token, JWT_SECRET);
    if (payload.role !== "ADMIN") throw new Error("Not admin");

    const { actionType, targetUser, details } = req.body;

    const action = await prisma.adminAction.create({
      data: {
        adminId: payload.id,
        actionType,
        targetUser,
        details
      }
    });

    res.status(201).json({ message: "Action logged", action });
  } catch {
    res.status(401).json({ message: "Unauthorized" });
  }
}