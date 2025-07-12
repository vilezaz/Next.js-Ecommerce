import Link from 'next/link'
import React from 'react'
import { IoCartOutline, IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-[#171717] text-white py-5 px-10'>
      <h1>ZAZ STORE.</h1>
      <div className='felx space-x-5 text-gray-400'>
        <Link href={"all"}>All</Link>
        <Link href={"/shirts"}>Shirts</Link>
        <Link href={"/shoes"}>Shoes</Link>
      </div>
      <div className='flex items-center'>
        <input className='min-w-80 border border-gray-600 outline-none rounded-md py-1.5 px-3   placeholder:text-sm placeholder:text-gray-400' type="text" placeholder='Search for Products' />
        <span className='relative right-7'><IoSearch /></span>
      </div>
      <div className='text-xl cursor-pointer'>
        <Link href={"/cart"}><IoCartOutline /></Link>
      </div>
    </nav>
  )
}

export default Navbar