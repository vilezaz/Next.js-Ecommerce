"use client";

import { useState } from "react";
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
    <div className="w-full min-h-screen p-4 pt-8 sm:p-6 md:p-10 bg-black flex flex-col md:flex-row gap-6 md:gap-10">
      <div className="relative w-full md:w-2/3 h-72 sm:h-96 md:h-[80vh]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="p-4 sm:p-8 object-contain"
        />
      </div>

      <div className="w-full md:w-1/3 text-white flex flex-col justify-center gap-4 sm:gap-5">
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          {product.title}
        </h3>

        <strong className="rounded-full px-3 py-1.5 bg-blue-500 w-fit flex items-center text-sm sm:text-base">
          <BiDollar />
          {product.price} USD
        </strong>

        <p className="border border-gray-700" />

        <p className="text-sm sm:text-base">{product.description}</p>

        <div>
          <p className="uppercase my-2 text-sm sm:text-base">Size</p>
          <div className="flex flex-wrap gap-2 sm:gap-3 text-center">
            {sizes.map((size, index) => (
              <button
                key={index}
                onClick={() => setSelectedSize(size)}
                className={`text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 w-14 sm:w-16 rounded-full ${
                  selectedSize === size ? "bg-blue-600" : "bg-[#171717]"
                } hover:cursor-pointer border border-transparent hover:border-blue-500`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!selectedSize || isPending}
          className={`px-4 sm:px-5 py-2.5 sm:py-3 my-3 rounded-full hover:cursor-pointer transition-colors duration-300 text-sm sm:text-base ${
            !selectedSize || isPending
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isPending ? "Adding ..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsClient;
