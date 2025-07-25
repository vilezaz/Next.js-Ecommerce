import Link from "next/link";
import React from "react";

const SignInBtn = () => {
  return (
    <Link href={"/auth/signin"} className="px-4 cursor-pointer py-1.5 rounded-full bg-blue-500 font-semibold text-white hover:bg-blue-600 transition-colors duration-300">
      Sign In
    </Link>
  );
};

export default SignInBtn;
