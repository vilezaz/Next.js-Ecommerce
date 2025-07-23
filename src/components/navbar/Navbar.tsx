import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#171717] text-white py-5 px-10">
      <h1>
        <Link href="/">ZAZ STORE.</Link>
      </h1>

      <div className="flex space-x-5 text-gray-400">
        <Link href="/search">All</Link>
        <Link href="/search/shirts">Shirts</Link>
        <Link href="/search/shoes">Shoes</Link>
      </div>

      <Search />

      <div className="text-xl cursor-pointer">
        <Link href="/cart">
          <IoCartOutline />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
