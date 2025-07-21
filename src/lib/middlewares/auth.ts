import { NextRequest } from "next/server";
import { verifyToken } from "../utils/jwt";

export const verifyAuth = async (req: NextRequest) => {
  const cookieToken = req.cookies.get("token")?.value;
  const headerToken = req.headers.get("Authorization")?.split(" ")[1];
  const token = cookieToken || headerToken;
  if (!token) throw new Error("No token provided");

  try {
    const decoded = verifyToken(token);
    return decoded;
  } catch (err) {
    throw new Error("Invalid token");
  }
};
