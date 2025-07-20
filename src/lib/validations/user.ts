import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, { error: "Name is required" }),
  email: z
    .email({ message: "Invalid email address" })
    .refine((val) => val.length > 0, { error: "Email is required" }),
  password: z.string().min(1, { error: "Password is required" }),
  cart: z.array(
    z.object({
      product: z.string(),
      quantity: z.number(),
      size: z.string(),
    })
  ),
});

export const partialUserSchema = userSchema.partial();
