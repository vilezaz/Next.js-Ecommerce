import CollectionSidebar from "@/components/CollectionSidebar";
import ProductCard from "@/components/ProductCard";
import SortingOrder from "@/components/SortingOrder";
import { getProductsByCategory } from "@/lib/data/products";
import React from "react";

type Props = {
  params: {
    category: string;
  };
};

const CategoryPage = ({ params }: Props) => {
  const category = params.category.toLowerCase();
  const products = getProductsByCategory(category);

  return (
    <div className="flex bg-[#171717] min-h-[80vh] text-white py-5">
      <CollectionSidebar />

      <div className="grid grid-cols-3 gap-5 grow">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <SortingOrder />
    </div>
  );
};

export default CategoryPage;
