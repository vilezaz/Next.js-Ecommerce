import { connectDB } from "@/lib/db";
import { handleApiError } from "@/lib/middlewares/error";
import { Product } from "@/lib/models/Product";
import { partialProductSchema } from "@/lib/validations/product";
import { validateRequest } from "@/lib/validations/validateSchema";
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

    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json(
        {
          message: "Product with the id not found",
        },
        { status: 404 }
      );
    }

    const validatedData = await validateRequest(partialProductSchema, req);
    if (validatedData instanceof NextResponse) return validatedData;

    const {
      title = product.title,
      description = product.description,
      category = product.category,
      price = product.price,
      size = product.size,
      image = product.image,
    } = validatedData;

    const updateProduct = await Product.findByIdAndUpdate(
      id,
      {
        title,
        description,
        category,
        price,
        size,
        image,
      },
      { new: true }
    );
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
