import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ["shoes", "shirts", "caps", "pants", "others"],
    },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
