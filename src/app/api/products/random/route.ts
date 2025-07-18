import { connectDB } from "@/lib/db";
import { handleApiError } from "@/lib/middlewares/error";
import { Product } from "@/lib/models/Product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();

    const excludeID = "6878989986889f438327844b";

    const randomProducts = await Product.aggregate([
      { $match: { _id: { $ne: new mongoose.Types.ObjectId(excludeID) } } },
      { $sample: { size: 2 } },
    ]);
    if (!randomProducts) {
      return NextResponse.json(
        {
          message: "Error occured while fetching random products",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Random products fetched successsfully",
        products: randomProducts,
      },
      { status: 200 }
    );
  } catch (error) {
    return handleApiError(error);
  }
};
