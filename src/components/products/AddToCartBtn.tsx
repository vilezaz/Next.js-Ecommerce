"use client";

import { addToCart } from "@/lib/apiClient/cart";
import React from "react";
import toast from "react-hot-toast";

const AddToCartBtn = ({
  productId,
  isAuthenticated,
}: {
  productId: string;
  isAuthenticated: boolean;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const addProductToCart = async () => {
    if (!isAuthenticated) {
      toast.error("Please signin first");
      return;
    }

    try {
      await addToCart({ productId, quantity: 1, size: "M" });
      toast.success("Added to cart");
    } catch (error: any) {
      toast.error(error.message || "Error occured while adding to cart");
    }
  };
  return (
    <button
      onClick={(e) => {
        handleClick(e);
        addProductToCart();
      }}
      className="absolute right-3 top-3 px-3 py-1.5 border-2 border-blue-500 rounded-3xl text-white bg-blue-500 font-semibold hover:cursor-pointer hover:bg-blue-600 transition-colors duration-200">
      Add To Cart
    </button>
  );
};

export default AddToCartBtn;
