import { Product } from "@/types/product";
import React from "react";
import { BiDollar } from "react-icons/bi";

type Props = {
  product: Product;
  source?: string;
};

const ProductTitlePriceCard = ({ product, source }: Props) => {
  return (
    <div
      className={`my-2 ${
        source ? "mx-auto" : "absolute right-0 bottom-0 mx-[2px] md:mx-2"
      } border border-gray-700 flex items-center justify-between md:w-fit max-w-[200px] rounded-full`}>
      <h3 className="text-gray-300 text-xs md:text-sm md:px-2 px-1 font-semibold truncate max-w-[180px] md:w-fit">
        {product.title}
      </h3>
      <strong className="flex items-center bg-green-900 text-xs md:text-sm text-white px-1 md:px-3 m-0.5 py-1.5 rounded-3xl">
        <BiDollar />
        {product.price.toFixed(2)}
      </strong>
    </div>
  );
};

export default ProductTitlePriceCard;
