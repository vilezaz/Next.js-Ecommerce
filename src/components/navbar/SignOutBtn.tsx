"use client";

import { userSignOut } from "@/lib/apiClient/userAuth";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const SignOutBtn = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await userSignOut();
      router.refresh();
      toast.success("Signed out successfully!");
    } catch (error) {
      toast.error("Error signing out");
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className=" border-2 px-3.5 text-blue-500 font-semibold rounded-full py-1.5 border-blue-500 cursor-pointer transition-colors duration-200 hover:text-white hover:bg-blue-500">
      Sign Out
    </button>
  );
};

export default SignOutBtn;
