import { getProductDetails } from "@/lib/api/products";
import React from "react";

type Props = {
  params: {
    slug: string,
  },
};

const page = async ({ params }: Props) => {
  const product = await getProductDetails(params.slug);
  console.log(product);
  
  return <div>{product.title}</div>;
};

export default page;
