"use client";

import { useOptimistic, useTransition, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { addToCart, decreaseCart } from "@/redux/auth/cartThunks";
import toast from "react-hot-toast";
import { CartItem } from "@/types/cartItem";

type ActionType = "increase" | "decrease";

export function useOptimisticCart() {
  const reduxItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  const [cachedItems, setCachedItems] = useState<CartItem[]>(reduxItems);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!isPending) {
      setCachedItems(reduxItems);
    }
  }, [reduxItems, isPending]);

  const [optimisticItems, updateOptimistic] = useOptimistic(
    cachedItems,
    (
      state,
      {
        productId,
        size,
        type,
      }: { productId: string; size: string; type: ActionType }
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

  const handleUpdate = async (
    productId: string,
    size: string,
    type: ActionType
  ) => {
    const rollback: any = {
      productId,
      size,
      type: type === "increase" ? "decrease" : "increase",
    };

    startTransition(async () => {
      updateOptimistic({ productId, size, type });

      try {
        if (type === "increase") {
          await dispatch(addToCart({ productId, quantity: 1, size })).unwrap();
        } else {
          await dispatch(
            decreaseCart({ productId, quantity: 1, size })
          ).unwrap();
        }
      } catch {
        updateOptimistic(rollback);
        toast.error(
          `Failed to ${type === "increase" ? "add" : "remove"} item from cart`
        );
      }
    });
  };

  const totalAmount = Array.isArray(optimisticItems)
    ? optimisticItems.reduce(
        (acc, item) => acc + item.quantity * item.product.price,
        0
      )
    : 0;

  return {
    optimisticItems,
    isPending,
    handleIncrease: (id: string, size: string) =>
      handleUpdate(id, size, "increase"),
    handleDecrease: (id: string, size: string) =>
      handleUpdate(id, size, "decrease"),
    totalAmount,
  };
}
