import CollectionSidebar from "@/components/CollectionSidebar";
import ProductCard from "@/components/ProductCard";
import SortingOrder from "@/components/SortingOrder";
import { getAllProducts } from "@/lib/api/products";
import React from "react";

export const metadata = {
  title: "Zaz Store - Search",
};

const AllProductsPage = async () => {
  const products = await getAllProducts();

  return (
    <div className="flex bg-[#171717] min-h-[80vh] text-white py-5">
      <CollectionSidebar />

      <div className="grid grid-cols-3 gap-5 grow">
        {products.map((product, index) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>

      <SortingOrder />
    </div>
  );
};

export default AllProductsPage;
