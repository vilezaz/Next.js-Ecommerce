import CollectionSidebar from "@/components/CollectionSidebar";
import ProductCard from "@/components/products/ProductCard";
import SortingOrder from "@/components/SortingOrder";
import { getAllProducts, searchProducts } from "@/lib/apiClient/products";
import React from "react";

export const metadata = {
  title: "Zaz Store - Search",
};

type Props = {
  searchParams: Promise<{ query?: string }>;
};

const AllProductsPage = async ({ searchParams }: Props) => {
  const sp = await searchParams;
  const query = sp.query || "";
  const products = query ? await searchProducts(query) : await getAllProducts();

  const productNotFound = () => {
    if (query && products.length === 0) {
      return (
        <div className="min-h-[80vh] bg-[#171717] text-white p-5 font-semibold">
          <p>No products found for "{query}".</p>
        </div>
      );
    }
  };

  return (
    <div className="flex bg-[#171717] min-h-[80vh] text-white py-5 pt-20">
      <CollectionSidebar />

      {productNotFound() || (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 grow">
            {products.map((product, _index) => {
              return <ProductCard key={product._id} product={product} />;
            })}
          </div>

          <SortingOrder />
        </>
      )}
    </div>
  );
};

export default AllProductsPage;
