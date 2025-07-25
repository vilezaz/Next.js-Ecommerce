import React from "react";
import { IoClose } from "react-icons/io5";

interface Cart {
  isOpen: boolean;
  onClose: () => void;
}

const CartModel = ({ isOpen, onClose }: Cart) => {
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
        <div className="flex justify-between items-center mb-4 mx-5 mt-2.5">
          <h2 className="text-lg font-bold">My Cart</h2>
          <button className="text-xl border rounded-sm p-1.5 border-gray-600 cursor-pointer group transition-all duration-300" onClick={onClose}>
            <IoClose className="cursor-pointer group-hover:scale-105" size={24} />
          </button>
        </div>
        <div>
          <p>Cart is empty</p>
        </div>
      </div>
    </div>
  );
};

export default CartModel;
