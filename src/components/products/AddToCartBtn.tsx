"use client";

import { addToCart, fetchCart } from "@/redux/auth/cartThunks";
import { AppDispatch, RootState } from "@/redux/store";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const AddToCartBtn = ({ productId }: { productId: string }) => {
  const { user, loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const addProductToCart = async () => {
    if (!loading && !user) {
      toast.error("Please signin first");
      return;
    }
    try {
      await dispatch(addToCart({ productId, quantity: 1, size: "M" })).unwrap();
      await dispatch(fetchCart()).unwrap();
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
