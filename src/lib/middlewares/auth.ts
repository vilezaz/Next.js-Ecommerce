import { NextRequest } from "next/server";
import { verifyToken } from "../utils/jwt";

export const verifyAuth = async (req: NextRequest) => {
  const token = req.cookies.get("token")?.value;
  if (!token) throw new Error("No token provided");

  try {
    const decoded = verifyToken(token);
    return decoded;
  } catch (err) {
    throw new Error("Invalid token");
  }
};
