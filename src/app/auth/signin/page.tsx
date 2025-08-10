import SignForm from "@/components/auth/SignInForm";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#171717] min-h-[80vh] w-full pt-20 md:pt-30">
      <div className="bg-[#000000] w-full md:w-[420px] mx-auto rounded-lg p-5">
        <div className="text-white">
          <h3 className="text-4xl text-center p-2 font-bold">Welcome Back</h3>
          <p className="font-semibold text-center my-2 text-lg">
            Enter your credentials to continue
          </p>
        </div>
        
        <SignForm />

        <p className="text-white text-center my-2">
          Don&apos;t have an account?
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
