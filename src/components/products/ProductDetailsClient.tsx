"use client";

import { use, useState } from "react";
import Image from "next/image";
import { useOptimisticCart } from "@/hooks/useOptimisticCart";
import { Product } from "@/types/product";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { openCart } from "@/redux/slices/modalSlice";
import toast from "react-hot-toast";
import { BiDollar } from "react-icons/bi";

type Props = {
  product: Product;
  sizes: string[];
};

const ProductDetailsClient = ({ product, sizes }: Props) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { handleIncrease, isPending } = useOptimisticCart();
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please signin first");
      return;
    }
    if (selectedSize) {
      handleIncrease(product._id, selectedSize);
      dispatch(openCart());
      setSelectedSize(null);
      toast.success("Added to cart");
    }
  };

  return (
    <div className="w-full h-[80vh] overflow-y-hidden p-10 bg-[#000000] flex">
      <div className="relative h-full w-2/3">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="p-10 object-contain"
        />
      </div>
      <div className="h-full w-1/3 text-white flex flex-col justify-center gap-5">
        <h3 className="text-5xl font-bold">{product.title}</h3>
        <strong className="rounded-full px-3 py-1.5 bg-blue-500 w-fit flex items-center">
          <BiDollar />
          {product.price} USD
        </strong>
        <p className="border border-gray-700" />
        <p>{product.description}</p>
        <div>
          <p className="uppercase my-2">Size</p>
          <div className="flex flex-wrap gap-3 text-center">
            {sizes.map((size, index) => (
              <button
                key={index}
                onClick={() => setSelectedSize(size)}
                className={`text-sm px-5 py-2 w-16 rounded-full ${
                  selectedSize === size ? "bg-blue-600" : "bg-[#171717]"
                } hover:cursor-pointer border border-transparent hover:border-blue-500`}>
                {size}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          disabled={!selectedSize || isPending}
          className={`px-5 py-3 my-3 rounded-full hover:cursor-pointer transition-colors duration-300 ${
            !selectedSize || isPending
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}>
          {isPending ? "Adding ..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsClient;
