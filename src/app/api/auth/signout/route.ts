import { handleApiError } from "@/lib/middlewares/error";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async () => {
  try {
    (await cookies()).set("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(0),
      sameSite: "lax",
      path: "/",
    });

    return NextResponse.json({
      message: "logged out successfully",
    });
  } catch (error) {
    return handleApiError(error);
  }
};
