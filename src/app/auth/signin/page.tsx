"use client";

import { userSignIn } from "@/lib/apiClient/userAuth";
import {
  UserSignInFormData,
  UserFormSchemaSignIn,
} from "@/lib/validations/clientUserZod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSignInFormData>({
    resolver: zodResolver(UserFormSchemaSignIn),
  });

  const onSubmit = async (data: UserSignInFormData) => {
    try {
      const res = await userSignIn(data);
      toast.success("Signed in successfully!");
      reset();
    } catch (error: any) {
      toast.error(error.message || "SignIn failed");
    }
  };

  return (
    <div className="bg-[#171717] h-[80vh] w-full pt-10">
      <div className="bg-[#000000] w-[420px] mx-auto rounded-lg p-5">
        <div className="text-white">
          <h3 className="text-4xl text-center p-2 font-bold">Welcome Back</h3>
          <p className="font-semibold text-center my-2 text-lg">
            Enter your credentials to continue
          </p>
        </div>
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
            className="bg-blue-500 px-3 py-2.5 text-lg rounded-md my-3 font-semibold hover:cursor-pointer hover:bg-blue-600 transition-colors duration-300">
            Sign In
          </button>
        </form>
        <p className="text-white text-center my-2">
          Don&apos;t have an account?{" "}
          <Link
            href={"/auth/signup"}
            className="text-blue-500 hover:cursor-pointer hover:text-blue-600 transition-colors duration-300">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
