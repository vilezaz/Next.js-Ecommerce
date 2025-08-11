"use client";

import { signOutUser } from "@/redux/auth/authThunk";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";

const SignOutBtn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await dispatch(signOutUser()).unwrap();
      router.refresh();
      toast.success("Signed out successful");
    } catch (error: any) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className=" border-2 px-3.5 text-blue-500 font-semibold rounded-full py-1.5 border-blue-500 cursor-pointer transition-colors duration-200 hover:text-white hover:bg-blue-500">
      {loading ? <PulseLoader size={6} color="#fff" /> : "Sign Out"}
    </button>
  );
};

export default SignOutBtn;
