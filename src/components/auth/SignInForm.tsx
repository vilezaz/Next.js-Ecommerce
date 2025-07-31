"use client";

import {
  UserSignInFormData,
  UserFormSchemaSignIn,
} from "@/lib/validations/clientUserZod";
import { signInUser } from "@/redux/auth/authThunk";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const SignInForm = () => {
  const dispatch = useDispatch<any>();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserSignInFormData>({
    resolver: zodResolver(UserFormSchemaSignIn),
  });

  const onSubmit = async (data: UserSignInFormData) => {
    try {
      await dispatch(signInUser(data)).unwrap();
      toast.success("Signed in successfully!");
      reset();
      router.push("/");
      router.refresh();
    } catch (error: any) {
      toast.error(error.message || "SignIn failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 mt-5 text-white">
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          {...register("email")}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your Email"
          className="outline-none border border-gray-800 rounded px-3 py-2.5"
          autoComplete="off"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <input
          {...register("password")}
          type="password"
          name="password"
          id="password"
          placeholder="Enter your Password"
          className="outline-none border border-gray-800 rounded px-3 py-2.5"
          autoComplete="off"
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`bg-blue-500 px-3 py-2.5 text-lg rounded-md my-3 font-semibold transition-colors duration-300 ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}>
        {isSubmitting ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
};

export default SignInForm;
