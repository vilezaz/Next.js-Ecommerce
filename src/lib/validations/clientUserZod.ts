import { z } from "zod";

export const userSignUpFormSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address")
      .trim(),

    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(100, "Password must be less than 100 characters")
      .trim(),

    confirmPassword: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(100, "Password must be less than 100 characters")
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type UserSignUpFormData = z.infer<typeof userSignUpFormSchema>;



export const UserFormSchemaSignIn = userSignUpFormSchema.pick({
  email: true,
  password: true,
});

export type UserSignInFormData = z.infer<typeof UserFormSchemaSignIn>;

