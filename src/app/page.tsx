import ProductsCarousel from "@/components/ProductsCarousel";
import { getRandomProducts } from "@/lib/api/products";
import Image from "next/image";

export const metadata = {
  title: "Zaz Store",
};

export default async function HomePage() {
  const randomProducts = await getRandomProducts();

  return (
    <main className="min-h-[80vh] bg-[#171717]">
      <div className="flex space-x-5 mb-5">
        <div className="bg-[#000000] w-4/6 h-[70vh] mx-5 rounded-md relative border hover:cursor-pointer border-transparent hover:border-blue-500 group">
          <Image
            src="/products/shirts/shirt4.png"
            alt="Summer Shirt"
            fill
            priority
            className="object-contain p-16 group-hover:scale-105 transition-all duration-400"
          />
        </div>
        <div className="w-2/6 space-y-5 mr-5">
          {randomProducts.map((product, _index) => (
            <div
              key={product._id}
              className="w-full h-[33.5vh] border hover:cursor-pointer border-transparent hover:border-blue-500 group bg-[#000000] rounded-md relative">
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                className="object-contain p-2 group-hover:scale-105 transition-all duration-400"
              />
              </div>
          ))}
        </div>
      </div>

      <ProductsCarousel />
    </main>
  );
}
