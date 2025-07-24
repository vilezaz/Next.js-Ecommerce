"use client";
import React, { useState } from "react";
import CartModel from "../cart/CartModel";
import { IoCartOutline } from "react-icons/io5";

const Cart = () => {
  const [cartOPen, setCartOpen] = useState(false);
  return (
    <>
      <div onClick={() => setCartOpen(true)} className="text-xl cursor-pointer">
        <IoCartOutline />
      </div>
      <CartModel isOpen={cartOPen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Cart;
