import Link from "next/link";
import React, { useState } from "react";
import Search from "./Search";
import Cart from "./Cart";
import LoginBtn from "./SignInBtn";

const Navbar = () => {
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
        <Cart />
        <LoginBtn />
      </div>
    </nav>
  );
};

export default Navbar;
