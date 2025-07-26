"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSignUp } from "@/lib/apiClient/userAuth";
import {
  userSignUpFormSchema,
  UserSignUpFormData,
} from "@/lib/validations/clientUserZod";
import { toast } from "react-toastify";

const page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSignUpFormData>({
    resolver: zodResolver(userSignUpFormSchema),
  });

  const onSubmit = async (data: UserSignUpFormData) => {
    const { confirmPassword, ...restData } = data;
    try {
      const res = await userSignUp(restData);
      toast.success("Signed up successfully!");
      reset();
    } catch (error: any) {
      toast.error(error.message || "Signup failed");
    }
  };

  return (
    <div className="bg-[#171717] min-h-[80vh] w-full pt-10">
      <div className="bg-[#000000] w-[420px] mx-auto rounded-lg p-5">
        <div className="text-white">
          <h3 className="text-4xl text-center font-bold">Hey Stranger</h3>
          <p className="font-semibold text-center my-2 text-lg">
            Ready to shop the coolest gear?
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 mt-5 text-white">
          <div className="flex flex-col">
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
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
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
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Confirm Password</label>
            <input
              {...register("confirmPassword")}
              type="password"
              name="confirmPassword"
              id="password"
              placeholder="Confirm Password"
              className="outline-none border border-gray-800 rounded px-3 py-2.5"
              autoComplete="off"
            />
            {errors.confirmPassword && (
              <span className="text-sm text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 px-3 py-2.5 text-lg rounded-md my-3 font-semibold hover:cursor-pointer hover:bg-blue-600 transition-colors duration-300">
            Sign Up
          </button>
        </form>
        <p className="text-white text-center my-2">
          Already have an account?
          <Link
            href={"/auth/signin"}
            className="text-blue-500 hover:cursor-pointer px-1 hover:text-blue-600 transition-colors duration-300">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
