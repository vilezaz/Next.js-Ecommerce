"use client";
import React from "react";
import SingleCartProduct from "./SingleCartProduct";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { addToCart, decreaseCart } from "@/redux/auth/cartThunks";
import toast from "react-hot-toast";

const CartProducts = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  const handleDecrease = async (productId: string, size: string) => {
    try {
      await dispatch(decreaseCart({ productId, quantity: 1, size })).unwrap();
    } catch (error) {
      toast.error("error removing item from cart");
    }
  };

  const handleIncrease = async (productId: string, size: string) => {
    try {
      await dispatch(addToCart({ productId, quantity: 1, size })).unwrap();
    } catch (error) {
      toast.error("error removing item from cart");
    }
  };

  if (!items || items.length === 0) {
    return <p className="text-white mt-10">Your cart is empty</p>;
  }

  return (
    <div className="flex flex-col gap-2 mt-10">
      {items.map((item, index) => (
        <SingleCartProduct
          key={index}
          item={item}
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
        />
      ))}
    </div>
  );
};

export default CartProducts;
