"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoCartOutline, IoSearch } from "react-icons/io5";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!search.trim()) return;

    router.push(`/search?query=${encodeURIComponent(search.trim())}`);
    setSearch("");
  };

  return (
    <nav className="flex items-center justify-between bg-[#171717] text-white py-5 px-10">
      <h1><Link href="/">ZAZ STORE.</Link></h1>

      <div className="flex space-x-5 text-gray-400">
        <Link href="/search">All</Link>
        <Link href="/search/shirts">Shirts</Link>
        <Link href="/search/shoes">Shoes</Link>
      </div>

      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="min-w-80 border border-gray-600 outline-none rounded-md py-1.5 px-3 placeholder:text-sm placeholder:text-gray-400"
          type="text"
          placeholder="Search for Products ..."
        />
        <button type="submit" className="relative right-7 text-gray-400">
          <IoSearch />
        </button>
      </form>

      <div className="text-xl cursor-pointer">
        <Link href="/cart">
          <IoCartOutline />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
