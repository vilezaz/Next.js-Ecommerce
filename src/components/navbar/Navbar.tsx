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

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
            className="hover:text-white transition-colors"
          >
            Shirts
          </Link>
          <Link
            href="/search/shoes"
            className="hover:text-white transition-colors"
          >
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

        <div className="flex md:hidden items-center gap-2">
          <CartBtn />
          <button
            onClick={openMobileMenu}
            className="p-2 rounded-md hover:bg-gray-700 transition-colors"
            aria-label="Open mobile menu"
          >
            <RxHamburgerMenu size={24} />
          </button>
        </div>
      </div>

      <div
        onClick={closeMobileMenu}
        className={`fixed inset-0 z-50 cursor-pointer bg-black/50 backdrop-blur-sm transition-opacity duration-200 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 left-0 w-full sm:w-[400px] max-h-[80vh] bg-[#171717] border-b border-gray-800 backdrop-blur-3xl rounded-b-md shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex justify-between items-center mb-4 px-5 mt-2.5">
            <h2 className="text-lg font-bold">Menu</h2>
            <button
              className="text-xl border rounded-sm p-1.5 border-gray-600 cursor-pointer group transition-all duration-300"
              onClick={closeMobileMenu}
            >
              <IoClose
                className="cursor-pointer group-hover:scale-105"
                size={24}
              />
            </button>
          </div>

          <div className=" py-3 mx-5 border-b border-gray-600">
            <Search onSearch={closeMobileMenu} />
          </div>

          <div className="flex flex-col space-y-1 py-3">
            <Link
              href="/search"
              className="px-4 py-0.5 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              onClick={closeMobileMenu}
            >
              All
            </Link>
            <Link
              href="/search/shirts"
              className="px-4 py-0.5 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              onClick={closeMobileMenu}
            >
              Shirts
            </Link>
            <Link
              href="/search/shoes"
              className="px-4 py-0.5 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              onClick={closeMobileMenu}
            >
              Shoes
            </Link>
            <Link
              href="/search/pants"
              className="px-4 py-0.5 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              onClick={closeMobileMenu}
            >
              Pants
            </Link>
            <Link
              href="/search/caps"
              className="px-4 py-0.5 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              onClick={closeMobileMenu}
            >
              Caps
            </Link>
          </div>

          <div className="px-4 py-3 border-t border-gray-600">
            {user ? <SignOutBtn /> : <LoginBtn />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
