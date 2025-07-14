import { connectDB } from "@/lib/db";
import { handleApiError } from "@/lib/middlewares/error";
import { Product } from "@/lib/models/Product";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    const products = await Product.find();
    return NextResponse.json(products);
  } catch (err) {
    return handleApiError(err);
  }
};