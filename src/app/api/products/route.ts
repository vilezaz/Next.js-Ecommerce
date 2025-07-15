import { connectDB } from "@/lib/db";
import { handleApiError } from "@/lib/middlewares/error";
import { Product } from "@/lib/models/Product";
import { NextRequest, NextResponse } from "next/server";

// get all products
export const GET = async () => {
  try {
    await connectDB();
    const products = await Product.find();
    return NextResponse.json(products);
  } catch (err) {
    return handleApiError(err);
  }
};

// create a product
export const POST = async (req: NextRequest) => {
  try {
    await connectDB();
    const body = await req.json();
    const { title, price, category, description, image, stars } = body;

    if (!title || !description || !category || !price || !stars) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const existingProduct = await Product.findOne({ title, category });
    if (existingProduct) {
      return NextResponse.json(
        { message: "Product already exists" },
        { status: 400 }
      );
    }

    const newProduct = await Product.create({
      title,
      price,
      category,
      description,
      image: image ?? "",
      stars: stars ?? 0,
    });

    return NextResponse.json(
      {
        message: "Product created successfully",
        product: newProduct,
      },
      { status: 201 }
    );
  } catch (error) {
    return handleApiError(error);
  }
};