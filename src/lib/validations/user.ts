import { z } from "zod";

export const userSchema = z.object({
  email: z
    .email({ message: "Invalid email address" })
    .refine((val) => val.length > 0, { error: "Email is required" }),
  password: z.string().min(6, "Password should be min 6 characters"),
  cart: z.array(
    z.object({
      product: z.string(),
      quantity: z.number(),
      size: z.string(),
    })
  ),
});

export const partialUserSchema = userSchema.partial();
