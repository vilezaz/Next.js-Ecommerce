"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  userSignUpFormSchema,
  UserSignUpFormData,
} from "@/lib/validations/clientUserZod";
import { toast } from "react-toastify";

import React from "react";
import { useRouter } from "next/navigation";
import { signUpUser } from "@/redux/auth/authThunk";
import { useDispatch } from "react-redux";

const SignUpForm = () => {
  const dispatch = useDispatch<any>();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserSignUpFormData>({
    resolver: zodResolver(userSignUpFormSchema),
  });

  const onSubmit = async (data: UserSignUpFormData) => {
    const { confirmPassword, ...restData } = data;
    try {
      await dispatch(signUpUser(restData)).unwrap();
      toast.success("Signed up successfully!");
      reset();
      router.push("/");
      router.refresh();
    } catch (error: any) {
      toast.error(error.message || "Signup failed");
    }
  };
  return (
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
          <span className="text-sm text-red-500">{errors.email.message}</span>
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
        disabled={isSubmitting}
        className={`bg-blue-500 px-3 py-2.5 text-lg rounded-md my-3 font-semibold transition-colors duration-300 ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}>
        {isSubmitting ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
};

export default SignUpForm;
