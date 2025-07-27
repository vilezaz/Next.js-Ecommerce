import Link from "next/link";
import React from "react";

const UserProfileBtn = ({ getName }: { getName: () => string }) => {
  return (
    <Link href={"/profile"} className=" border px-3.5 text-blue-500 font-semibold rounded-full py-1.5 border-gray-600 cursor-pointer group transition-all duration-300">
      {getName()}
    </Link>
  );
};

export default UserProfileBtn;
