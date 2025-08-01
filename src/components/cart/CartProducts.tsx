import React from "react";
import SingleCartProduct from "./SingleCartProduct";
import { CartItem } from "@/types/cartItem";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const CartProducts = () => {
  const { items, loading } = useSelector((state: RootState) => state.cart);

  if (loading) return <p>Loading cart...</p>;
  if (items.length === 0) return <p>Your cart is empty</p>;

  return (
    <div>
      <div className="flex flex-col gap-2 mt-10">
        {items.map((product: CartItem) => (
          <SingleCartProduct item={product} key={product.product._id} />
        ))}
      </div>
    </div>
  );
};

export default CartProducts;
