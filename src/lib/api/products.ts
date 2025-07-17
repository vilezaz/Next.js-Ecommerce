import { Product } from "@/types/product";

export const getAllProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, {
    cache: "no-cache",
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};


export const getProductByCategory = async (category: string): Promise<Product[]> => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products/category/${category}`, {
    cache: "no-cache",
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  return data.products;
};