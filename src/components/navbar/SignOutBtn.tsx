"use client";

import { signOutUser } from "@/redux/auth/authThunk";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const SignOutBtn = () => {
  const dispatch = useDispatch<any>();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await dispatch(signOutUser()).unwrap();
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
