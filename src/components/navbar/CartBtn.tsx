"use client";
import React, { useState } from "react";
import CartModel from "../cart/CartModel";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { closeCart, openCart } from "@/redux/slices/modalSlice";

const CartBtn = () => {
  const { isCartOpen } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <div
        onClick={() => dispatch(openCart())}
        className="text-xl border rounded-sm p-1.5 border-gray-600 cursor-pointer group transition-all duration-300">
        <IoCartOutline className="group-hover:scale-105 " />
      </div>
      <CartModel isOpen={isCartOpen} onClose={() => dispatch(closeCart())} />
    </>
  );
};

export default CartBtn;
