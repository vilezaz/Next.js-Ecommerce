import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const validateRequest = async <T>(
  schema: z.ZodSchema<T>,
  req: NextRequest
): Promise<T | NextResponse> => {
  try {
    const body = await req.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Invalid request body",
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    return result.data;
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
};
