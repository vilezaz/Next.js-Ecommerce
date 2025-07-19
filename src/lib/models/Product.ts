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
    size: {
      type: String,
      required: true,
      enum: [
        "XS",
        "S",
        "M",
        "L",
        "XL",
        "6",
        "6.5",
        "7",
        "7.5",
        "8",
        "8.5",
        "9",
        "10",
        "11",
        "12",
      ],
    },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
