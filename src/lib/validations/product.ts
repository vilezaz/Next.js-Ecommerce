import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  category: z.enum(["shoes", "shirts", "caps", "pants", "others"]),
  price: z.number().min(0.01, "Price must be positive"),
  size: z.string().min(1, "Size is required"),
  image: z.string().url().optional(),
});

export const partialProductSchema = productSchema.partial();
