import CollectionSidebar from "@/components/CollectionSidebar";
import ProductCard from "@/components/products/ProductCard";
import SortingOrder from "@/components/SortingOrder";
import { getProductByCategory } from "@/lib/apiClient/products";
import React from "react";

type Props = {
  params: {
    category: string;
  };
};

const CategoryPage = async ({ params }: Props) => {
  const category = params.category.toLowerCase();
  const products = await getProductByCategory(category);

  return (
    <div className="flex bg-[#171717] min-h-[90vh] pt-20 text-white py-5">
      <CollectionSidebar />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 grow">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <SortingOrder />
    </div>
  );
};

export default CategoryPage;
