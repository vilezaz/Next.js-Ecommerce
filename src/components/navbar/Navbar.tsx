"use client";
import Link from "next/link";
import React, { useState } from "react";
import Search from "./Search";
import LoginBtn from "./SignInBtn";
import CartBtn from "./CartBtn";
import SignOutBtn from "./SignOutBtn";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#171717] text-white select-none fixed w-full z-50">
      <div className="flex items-center justify-between md:py-5 py-1 px-4 md:px-10">
        <h1 className="text-lg md:text-xl font-bold">
          <Link href="/">ZAZ STORE.</Link>
        </h1>

        <div className="hidden md:flex space-x-5 text-gray-400">
          <Link href="/search" className="hover:text-white transition-colors">
            All
          </Link>
          <Link
            href="/search/shirts"
            className="hover:text-white transition-colors">
            Shirts
          </Link>
          <Link
            href="/search/shoes"
            className="hover:text-white transition-colors">
            Shoes
          </Link>
        </div>

        <div className="hidden md:block">
          <Search />
        </div>

        <div className="hidden md:flex gap-4 items-center">
          <CartBtn />
          {user ? <SignOutBtn /> : <LoginBtn />}
        </div>

        {/* mobile menu */}
        <div className="flex md:hidden items-center gap-2">
          <CartBtn />
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md hover:bg-gray-700 transition-colors"
            aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? (
              <button
                className="text-xl border rounded-sm p-1 border-gray-600 cursor-pointer group transition-all duration-300"
                onClick={toggleMobileMenu}>
                <IoClose
                  className="cursor-pointer group-hover:scale-105"
                  size={24}
                />
              </button>
            ) : (
              <button
                className="text-xl border rounded-sm p-1 border-gray-600 cursor-pointer group transition-all duration-300"
                onClick={toggleMobileMenu}>
                <RxHamburgerMenu
                  className="cursor-pointer group-hover:scale-105"
                  size={24}
                />
              </button>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden transition-transform duration-300 bg-[#171717] border-t border-gray-600">
          <div className="px-4 py-3 border-b border-gray-600">
            <Search onSearch={() => setIsMobileMenuOpen(false)} />
          </div>

          <div className="flex flex-col space-y-1 py-3">
            <Link
              href="/search"
              className="px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>
              All
            </Link>
            <Link
              href="/search/shirts"
              className="px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>
              Shirts
            </Link>
            <Link
              href="/search/shoes"
              className="px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>
              Shoes
            </Link>
          </div>

          <div className="px-4 py-3 border-t border-gray-600">
            {user ? <SignOutBtn /> : <LoginBtn />}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
