import Link from "next/link";
import React, { useState } from "react";
import Search from "./Search";
import LoginBtn from "./SignInBtn";
import { getCurrentUser } from "@/lib/utils/currentUser";
import CartBtn from "./CartBtn";
import UserProfileBtn from "./UserProfileBtn";

const Navbar = async () => {
  const user = await getCurrentUser();

  const getName = (): string => {
    const emailWord = user.email.split("@")[0];
    return emailWord[0].toUpperCase();
  };
  return (
    <nav className="flex select-none items-center justify-between bg-[#171717] text-white py-5 px-10">
      <h1>
        <Link href="/">ZAZ STORE.</Link>
      </h1>

      <div className="flex space-x-5 text-gray-400">
        <Link href="/search">All</Link>
        <Link href="/search/shirts">Shirts</Link>
        <Link href="/search/shoes">Shoes</Link>
      </div>

      <Search />
      <div className="flex gap-4 items-center">
        <CartBtn />
        {user ? (
          <UserProfileBtn getName={getName} />
        ) : (
          <LoginBtn />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
