import { Product } from "@/types/product";
import Image from "next/image";
import React from "react";
import ProductTitlePriceCard from "./ProductTitlePriceCard";
import Link from "next/link";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/products/${product.slug}`} className="relative bg-[#000000] text-white rounded-md shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-[350px] group hover:cursor-pointer border border-transparent hover:border-blue-500">
      <div className="relative w-full h-52 sm:h-64 md:h-72">
        <Image
          src={product.image}
          alt={product.title} priority
          fill   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="p-10 object-cover group-hover:scale-105 transition-all duration-400"
        />
      </div>

      <ProductTitlePriceCard product={product} source="productCard" />

      <button className="absolute right-3 top-3 px-3 py-1.5 border-2 border-blue-500 rounded-3xl text-white bg-blue-500 font-semibold hover:cursor-pointer hover:bg-blue-600 transition-colors duration-200">
        Add To Cart
      </button>
    </Link>
  );
};

export default ProductCard;
