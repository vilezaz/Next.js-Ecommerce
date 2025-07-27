import { cookies } from "next/headers";
import { verifyToken } from "./jwt";
import { User } from "../models/User";

export const getCurrentUser = async () => {
  const token = (await cookies()).get("token")?.value;
  if (!token) return null;
  try {
    const decoded = verifyToken(token);
    const user = User.findById(decoded.userId).select("-password");
    return user;
  } catch (error) {
    return null;
  }
};
