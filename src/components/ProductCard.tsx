import { Product } from "@/lib/data/products";
import React from "react";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="bg-[#000000] h-[50vh] text-white p-4 rounded-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-300">{product.category}</p>
      <p className="text-xl mt-2">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
