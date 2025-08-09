"use client";

import { useOptimisticCart } from "@/hooks/useOptimisticCart";
import { addToCart } from "@/redux/auth/cartThunks";
import { openCart } from "@/redux/slices/modalSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const AddToCartBtn = ({
  productId,
  category,
}: {
  productId: string;
  category: string;
}) => {
  const { user, loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const { isPending, handleIncrease } = useOptimisticCart();

  const size = category === "shoes" ? "8" : "M";

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
      handleIncrease(productId, size);
      dispatch(openCart());
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
      className="absolute text-sm md:text-base right-3 top-3 px-3 py-1.5 border-2 border-blue-500 rounded-3xl text-white bg-blue-500 font-semibold hover:cursor-pointer hover:bg-blue-600 transition-colors duration-200">
      Add To Cart
    </button>
  );
};

export default AddToCartBtn;
