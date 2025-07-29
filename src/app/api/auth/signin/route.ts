import { connectDB } from "@/lib/db";
import { handleApiError } from "@/lib/middlewares/error";
import { User } from "@/lib/models/User";
import { tokenSignIn } from "@/lib/utils/jwt";
import { partialUserSchema } from "@/lib/validations/user";
import { validateRequest } from "@/lib/validations/validateSchema";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();

    const validatedData = await validateRequest(partialUserSchema, req);
    if (validatedData instanceof NextResponse) return validatedData;

    const { email, password } = validatedData;

    if (!email || !password) {
      return NextResponse.json(
        { message: "all fields are required" },
        { status: 400 }
      );
    }

    const userExists = await User.findOne({ email });
    if (!userExists) {
      return NextResponse.json(
        {
          message: "User with this email does not exist",
        },
        { status: 404 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      userExists.password
    );

    if (!isPasswordCorrect)
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );

    const token = tokenSignIn({ userId: userExists._id });

    (await cookies()).set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json(
      {
        message: "Login successful",
        userExists,
        token,
      },
      { status: 200 }
    );
  } catch (error) {
    return handleApiError(error);
  }
};
