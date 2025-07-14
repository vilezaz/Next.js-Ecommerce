import jwt from "jsonwebtoken";

export const verifyAuth = async (req: Request) => {
  const token = req.headers.get("authorization")?.split(" ")[1];
  if (!token) throw new Error("No token provided");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    return decoded;
  } catch (err) {
    throw new Error("Invalid token");
  }
};
