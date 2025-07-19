import { connectDB } from "@/lib/db";
import { handleApiError } from "@/lib/middlewares/error";
import { Product } from "@/lib/models/Product";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    if (!query) {
      return NextResponse.json(
        {
          products: [],
        },
        { status: 200 }
      );
    }

    const products = await Product.find({
      title: { $regex: query, $options: "i" },
    });

    return NextResponse.json(
      {
        message: "Products fetched successfully for the search",
        products,
      },
      { status: 200 }
    );
  } catch (error) {
    return handleApiError(error);
  }
};
