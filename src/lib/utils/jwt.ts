import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export const tokenSignIn = (payload: object) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
};

export const verifyToken = (token: string): { userId: string } => {
  return jwt.verify(token, JWT_SECRET) as { userId: string };
};
