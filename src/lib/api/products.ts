import { Product } from "@/types/product";

export const getAllProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${process.env.NEXT_API_URL}/api/products`, {
    cache: "no-cache",
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const getProductByCategory = async (
  category: string
): Promise<Product[]> => {
  const res = await fetch(
    `${process.env.NEXT_API_URL}/api/products/category/${category}`,
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch products");
  const data = await res.json();
  return data.products;
};

export const getRandomProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${process.env.NEXT_API_URL}/api/products/random`, {
    cache: "no-cache",
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  const data = await res.json();
  return data.products;
};

export const getProductDetails = async (slug: string): Promise<Product> => {
  const res = await fetch(
    `${process.env.NEXT_API_URL}/api/products/slug/${slug}`,
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch products");

  const data = await res.json();
  return data.product;
};

export const searchProducts = async (query: string): Promise<Product[]> => {
  const res = await fetch(
    `${process.env.NEXT_API_URL}/api/products/search?query=${query}`,
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch products");

  const data = await res.json();
  return data.products;
};
