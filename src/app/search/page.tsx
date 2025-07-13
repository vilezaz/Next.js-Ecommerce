import CollectionSidebar from "@/components/CollectionSidebar";
import ProductCard from "@/components/ProductCard";
import SortingOrder from "@/components/SortingOrder";
import { getProductsByCategory } from "@/lib/data/products";
import React from "react";

const AllProductsPage = () => {
  const products = getProductsByCategory("all");

  return (
    <div className="flex bg-[#171717] min-h-[80vh] text-white py-5">
      <CollectionSidebar />

      <div className="grid grid-cols-3 gap-5 grow">
        {products.map((product, index) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>

      <SortingOrder />
    </div>
  );
};

export default AllProductsPage;
