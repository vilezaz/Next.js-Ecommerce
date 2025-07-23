import { getProductDetails } from "@/lib/apiClient/products";
import { getSizesByCategory } from "@/lib/utils/products";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const page = async ({ params }: Props) => {
  const product = await getProductDetails(params.slug);
  const sizes = getSizesByCategory(product.category);

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
        <strong className="rounded-full px-3 py-1.5 bg-blue-500 w-fit">
          ${product.price} USD
        </strong>
        <p className="border border-gray-700"></p>
        <p>{product.description}</p>
        <div>
          <p className="uppercase my-2">Size</p>
          <div className="flex flex-wrap gap-3 text-center">
            {sizes.map((size, index) => (
              <button
                className="text-sm px-5 py-2 w-16 rounded-full bg-[#171717] hover:cursor-pointer border border-transparent hover:border-blue-500"
                key={index}>
                {size}
              </button>
            ))}
          </div>
        </div>
        <button className="px-5 py-3 my-3 bg-blue-500 rounded-full hover:cursor-pointer hover:bg-blue-600 transition-colors duration-300">Add To Cart</button>
      </div>
    </div>
  );
};

export default page;
