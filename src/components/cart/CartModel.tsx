import React from "react";
import { IoClose } from "react-icons/io5";

interface Cart {
  isOpen: boolean;
  onClose: () => void;
}

const CartModel = ({ isOpen, onClose }: Cart) => {
  if (!isOpen) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 z-50 cursor-pointer">
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute border border-gray-800 right-0 top-0 cursor-default backdrop-blur-3xl h-full w-[400px] p-4 rounded-md shadow-xl transition-all duration-300">
        <div className="flex justify-between items-center mb-4 mx-5 mt-2.5">
          <h2 className="text-lg font-bold">My Cart</h2>
          <button onClick={onClose}>
            <IoClose className="cursor-pointer" size={24} />
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
