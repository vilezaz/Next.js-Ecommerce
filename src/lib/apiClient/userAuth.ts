import { UserData } from "@/types/userData";

export const userSignUp = async (data: UserData) => {
  try {
    const res = await fetch(`http://localhost:3000/api/auth/signup`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Sign up failed");
    }

    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Error Signing Up");
  }
};

export const userSignIn = async (data: UserData) => {
  try {
    const res = await fetch(`http://localhost:3000/api/auth/signin`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Sign In failed");
    }

    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Error Signing In");
  }
};
