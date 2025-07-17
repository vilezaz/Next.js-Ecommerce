import { Product } from "@/types/product";
import Image from "next/image";
import React from "react";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="relative bg-[#000000] text-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-[360px]">
      <div className="relative w-full h-52 sm:h-64 md:h-72">
        <Image
          src={product.image}
          alt={product.title} priority
          fill   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="p-10 object-cover"
        />
      </div>

      <div className="my-2 border border-gray-700 flex items-center justify-between w-fit mx-auto rounded-full">
        <h3 className="text-lg text-gray-300 px-2 font-semibold truncate">
          {product.title}
        </h3>
        <strong className="block bg-green-900 text-white px-3 m-1 py-1.5 rounded-3xl">
          ${product.price.toFixed(2)}
        </strong>
      </div>

      <button className="absolute right-3 top-3 px-3 py-1.5 border-2 border-blue-500 rounded-3xl text-white bg-blue-500 font-semibold hover:cursor-pointer hover:bg-blue-600 transition-colors duration-200">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
