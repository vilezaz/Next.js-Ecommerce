"use client";
import React, { useEffect, useState, useOptimistic, useTransition } from "react";
import SingleCartProduct from "./SingleCartProduct";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { addToCart, decreaseCart } from "@/redux/auth/cartThunks";
import toast from "react-hot-toast";
import { CartItem } from "@/types/cartItem";

const CartProducts = () => {
  const reduxItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  const [isPending, startTransition] = useTransition();

  const [cachedItems, setCachedItems] = useState<CartItem[]>(reduxItems);

  useEffect(() => {
    if (!isPending) {
      setCachedItems(reduxItems);
    }
  }, [reduxItems, isPending]);

  const [optimisticItems, addOptimisticItems] = useOptimistic(
    cachedItems,
    (
      state,
      {
        productId,
        size,
        type,
      }: { productId: string; size: string; type: "increase" | "decrease" }
    ) => {
      return state
        .map((item) => {
          if (item.product._id === productId && item.size === size) {
            const newQty =
              type === "increase" ? item.quantity + 1 : item.quantity - 1;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    }
  );

  const handleDecrease = (productId: string, size: string) => {
    const rollback = { productId, size, type: "increase" as const };
    startTransition(async () => {
      addOptimisticItems({ productId, size, type: "decrease" });
      try {
        await dispatch(decreaseCart({ productId, quantity: 1, size })).unwrap();
      } catch {
        addOptimisticItems(rollback);
        toast.error("Failed to remove item from cart");
      }
    });
  };

  const handleIncrease = (productId: string, size: string) => {
    const rollback = { productId, size, type: "decrease" as const };
    startTransition(async () => {
      addOptimisticItems({ productId, size, type: "increase" });
      try {
        await dispatch(addToCart({ productId, quantity: 1, size })).unwrap();
      } catch {
        addOptimisticItems(rollback);
        toast.error("Failed to add item to cart");
      }
    });
  };

  if (!optimisticItems || optimisticItems.length === 0) {
    return <p className="text-white mt-10">Your cart is empty</p>;
  }

  return (
    <div className="flex flex-col gap-2 mt-10">
      {optimisticItems.map((item, index) => (
        <SingleCartProduct
          key={`${item.product._id}-${item.size}`}
          item={item}
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
          disabled={isPending}
        />
      ))}
    </div>
  );
};

export default CartProducts;
