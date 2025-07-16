import { connectDB } from "@/lib/db";
import { handleApiError } from "@/lib/middlewares/error";
import { Product } from "@/lib/models/Product";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: {
    id: string;
  };
};

// update a product
export const PUT = async (req: NextRequest, { params }: Params) => {
  try {
    await connectDB();

    const { id } = params;
    const body = await req.json();

    const { title, description, category, price, image, size } = body;

    if (!title || !description || !category || !price || !size) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const updateProduct = await Product.findByIdAndUpdate(id, {
      title,
      description,
      category,
      price,
      size,
      image,
    });
    if (!updateProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Product updated Successfully",
        updatedproduct: updateProduct,
      },
      { status: 200 }
    );
  } catch (error) {
    return handleApiError(error);
  }
};

// delete a product
export const DELETE = async (req: NextRequest, { params }: Params) => {
  try {
    await connectDB();

    const { id } = params;

    const deleteProduct = await Product.findByIdAndDelete(id);
    if (!deleteProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Product deleted Successfully",
        deletedProduct: deleteProduct,
      },
      { status: 200 }
    );
  } catch (error) {
    return handleApiError(error);
  }
};
