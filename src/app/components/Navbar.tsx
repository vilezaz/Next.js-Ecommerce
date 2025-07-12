'use client';

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <ul className="flex gap-4 items-center">
        <li>
          <Link
            href="/"
            className="px-4 py-2 rounded hover:bg-gray-700 transition-all duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="px-4 py-2 rounded hover:bg-gray-700 transition-all duration-200"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
