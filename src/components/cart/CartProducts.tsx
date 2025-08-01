import React from "react";
import SingleCartProduct from "./SingleCartProduct";
import { CartItem } from "@/types/cartItem";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const CartProducts = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  console.log(items);
  
  return (
    <div>
      {items.length > 0 ? (
        <div className="flex flex-col gap-2 mt-10">
          {items.map((product: CartItem) => (
            <SingleCartProduct item={product} key={product.product._id} />
          ))}
        </div>
      ) : (
        "Cart is empty"
      )}
    </div>
  );
};

export default CartProducts;
