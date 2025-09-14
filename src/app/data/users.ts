// Simple in-memory storage for demo purposes
// In production, use a database!
import bcrypt from "bcryptjs";

export type UserRole = "user" | "admin";

export interface User {
  id: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  name?: string;
}

const users: User[] = [
  // Demo admin user
  {
    id: "1",
    email: "admin@polished-profile.com",
    passwordHash: bcrypt.hashSync("adminpassword", 10), // Default admin password
    role: "admin",
    name: "Admin"
  }
];

export function findUserByEmail(email: string): User | undefined {
  return users.find(u => u.email === email);
}

export function addUser(user: User): void {
  users.push(user);
}

export function getAllUsers(): User[] {
  return users;
}