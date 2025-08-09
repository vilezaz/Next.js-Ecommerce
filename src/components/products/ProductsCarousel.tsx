import { getAllProducts } from "@/lib/apiClient/products";
import Image from "next/image";
import React from "react";
import ProductTitlePriceCard from "./ProductTitlePriceCard";
import Link from "next/link";

const ProductsCarousel = async () => {
  const products = await getAllProducts();
  
  return (
    <div className="w-full overflow-x-auto">
      <div className="bg-[#171717] flex space-x-2 md:space-x-5 flex-nowrap scroll-animate">
        {products.map((product, _index) => (
          <Link href={`/products/${product.slug}`}
            key={product._id}
            className="bg-[#000000] md:min-w-[450px] min-w-[250px] mb-5 h-[30vh] rounded-md relative border hover:cursor-pointer border-transparent hover:border-blue-500 group">
            <Image
              src={product.image}
              alt={product.title}
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain p-2 group-hover:scale-105 transition-all duration-400"
            />

            <ProductTitlePriceCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsCarousel;
