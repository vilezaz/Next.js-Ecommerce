import { getProductDetails } from "@/lib/apiClient/products";
import { getSizesByCategory } from "@/lib/utils/products";
import ProductDetailsClient from "@/components/products/ProductDetailsClient";

type Props = {
  params: {
    slug: string;
  };
};

const Page = async ({ params }: Props) => {
  const product = await getProductDetails(params.slug);
  const sizes = getSizesByCategory(product.category);

  return <ProductDetailsClient product={product} sizes={sizes} />;
};

export default Page;
