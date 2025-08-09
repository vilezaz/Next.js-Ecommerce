import ProductsCarousel from "@/components/products/ProductsCarousel";
import ProductTitlePriceCard from "@/components/products/ProductTitlePriceCard";
import { getRandomProducts } from "@/lib/apiClient/products";
import Image from "next/image";
import Link from "next/link";
import { BiDollar } from "react-icons/bi";

export const metadata = {
  title: "Zaz Store",
};

export default async function HomePage() {
  const randomProducts = await getRandomProducts();
  const slug = "printed-summer-shirt";

  return (
    <main className="min-h-[80vh] bg-[#171717]">
      <div className="flex flex-col md:flex-row space-x-2 md:space-x-5 mb-5 pt-10 md:pt-20">
        <Link
          href={`/products/${slug}`}
          className="bg-[#000000] w-full md:w-4/6 h-[40vh] md:h-[70vh] md:mx-5 my-2 md:my-0 rounded-md relative border hover:cursor-pointer border-transparent hover:border-blue-500 group">
          <Image
            src="/products/shirts/shirt4.png"
            alt="Summer Shirt"
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-contain p-8 md:p-16 group-hover:scale-105 transition-all duration-400"
          />
          <div className="my-2 absolute md:left-10 right-2 md:bottom-12 bottom-2 mx-2 border border-gray-700 flex items-center justify-between w-fit rounded-full">
            <h3 className=" text-gray-300 text-xs md:text-sm px-2 font-semibold truncate">
              Printed Summer Shirt
            </h3>
            <strong className="flex items-center bg-green-900 text-xs md:text-sm text-white px-3 m-0.5 py-1.5 rounded-3xl">
              <BiDollar /><span>19</span>
            </strong>
          </div>
        </Link>
        <div className="md:w-2/6 w-full flex justify-evenly gap-2 md:block md:space-y-5 mr-5">
          {randomProducts.map((product, _index) => (
            <Link
              href={`/products/${product.slug}`}
              key={product._id}
              className="block md:w-full w-full h-[33.5vh] border hover:cursor-pointer border-transparent hover:border-blue-500 group bg-[#000000] rounded-md relative">
              <Image
                src={product.image}
                alt={product.title}
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-contain p-2 group-hover:scale-105 transition-all duration-400"
              />

              <ProductTitlePriceCard product={product} />
            </Link>
          ))}
        </div>
      </div>

      <ProductsCarousel />
    </main>
  );  
}
