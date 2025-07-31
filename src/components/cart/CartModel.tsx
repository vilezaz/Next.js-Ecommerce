"use client";

import React from "react";
import { IoClose } from "react-icons/io5";
import CartProducts from "./CartProducts";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface Cart {
  isOpen: boolean;
  onClose: () => void;
}

const CartModel = ({ isOpen, onClose }: Cart) => {
  const { user, loading } = useSelector((state: RootState) => state.auth);

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 cursor-pointer bg-black/50 transition-opacity duration-100 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute right-0 top-0 h-full w-[400px] border border-gray-800 cursor-default backdrop-blur-3xl p-4 rounded-md shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transform`}>
        <div className="flex justify-between items-center mb-4 px-5 mt-2.5">
          <h2 className="text-lg font-bold">My Cart</h2>
          <button
            className="text-xl border rounded-sm p-1.5 border-gray-600 cursor-pointer group transition-all duration-300"
            onClick={onClose}>
            <IoClose
              className="cursor-pointer group-hover:scale-105"
              size={24}
            />
          </button>
        </div>
        <div className="px-5">
          {!loading && user ? (
            <CartProducts user={user} />
          ) : (
            <p>Plz login to see your cart</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModel;
