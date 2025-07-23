"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import Search from "./Search";
import CartModel from "../cart/CartModel";

const Navbar = () => {
  const [cartOPen, setCartOpen] = useState(false);
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

      <div onClick={() => setCartOpen(true)} className="text-xl cursor-pointer">
        <IoCartOutline />
      </div>

      <CartModel isOpen={cartOPen} onClose={() => setCartOpen(false)} />
    </nav>
  );
};

export default Navbar;
