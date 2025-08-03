import { CartItem } from "@/types/cartItem";
import Image from "next/image";
import { HiMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import React from "react";

interface Props {
  item: CartItem;
  onDecrease: (productId: string, size: string) => void;
  onIncrease: (productId: string, size: string) => void;
}

const SingleCartProduct = ({ item, onDecrease, onIncrease }: Props) => {
  const { product, quantity, size } = item;

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-700">
      <Image
        width={56}
        height={56}
        src={product.image || "/fallback.jpg"}
        alt={product.title}
        className="rounded-md w-16 h-16 p-1 border border-gray-700 object-cover"
      />

      <div className="flex-1 text-white">
        <p className="font-medium">{product.title}</p>
        <p className="text-sm text-gray-400">${product.price}</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-3 px-3 py-1.5 border border-gray-700 rounded-full">
          <button
            className="text-white hover:text-red-400 transition"
            onClick={() => onDecrease(product._id, size)}
          >
            <HiMinusSm className="text-lg" />
          </button>
          <span className="text-sm text-white font-semibold">{quantity}</span>
          <button onClick={() => onIncrease(product._id, size)} className="text-white hover:text-green-400 transition">
            <HiOutlinePlusSm className="text-lg" />
          </button>
        </div>
        <p className="text-xs text-gray-400">Size: {size}</p>
      </div>
    </div>
  );
};

export default SingleCartProduct;
