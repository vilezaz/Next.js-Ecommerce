import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: String,
  },
  { timestamps: true }
);

export const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
