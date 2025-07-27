"use client";
import React, { useState } from "react";
import CartModel from "../cart/CartModel";
import { IoCartOutline } from "react-icons/io5";

const CartBtn = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <div onClick={() => setCartOpen(true)} className="text-xl border rounded-sm p-1.5 border-gray-600 cursor-pointer group transition-all duration-300">
        <IoCartOutline className="group-hover:scale-105 " />
      </div>
      <CartModel isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default CartBtn;
