import ProductsCarousel from "@/components/products/ProductsCarousel";
import ProductTitlePriceCard from "@/components/products/ProductTitlePriceCard";
import { getRandomProducts } from "@/lib/api/products";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Zaz Store",
};

export default async function HomePage() {
  const randomProducts = await getRandomProducts();
  const slug = "printed-summer-shirt";

  return (
    <main className="min-h-[80vh] bg-[#171717]">
      <div className="flex space-x-5 mb-5">
        <Link
          href={`/products/${slug}`}
          className="bg-[#000000] w-4/6 h-[70vh] mx-5 rounded-md relative border hover:cursor-pointer border-transparent hover:border-blue-500 group">
          <Image
            src="/products/shirts/shirt4.png"
            alt="Summer Shirt"
            fill
            priority
            className="object-contain p-16 group-hover:scale-105 transition-all duration-400"
          />
          <div className="my-2 absolute left-10 bottom-12 mx-2 border border-gray-700 flex items-center justify-between w-fit rounded-full">
            <h3 className=" text-gray-300 text-sm px-2 font-semibold truncate">
              Printed Summer Shirt
            </h3>
            <strong className="block bg-green-900 text-sm text-white px-3 m-0.5 py-1.5 rounded-3xl">
              $19.75
            </strong>
          </div>
        </Link>
        <div className="w-2/6 space-y-5 mr-5">
          {randomProducts.map((product, _index) => (
            <Link
              href={`/products/${product.slug}`}
              key={product._id}
              className="block w-full h-[33.5vh] border hover:cursor-pointer border-transparent hover:border-blue-500 group bg-[#000000] rounded-md relative">
              <Image
                src={product.image}
                alt={product.title}
                fill
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
