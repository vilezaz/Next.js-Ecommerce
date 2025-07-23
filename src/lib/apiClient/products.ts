import { Product } from "@/types/product";

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/api/products`, {
      cache: "no-cache",
    });

    if (!res.ok) throw new Error("Failed to fetch all products");
    return await res.json();
  } catch {
    throw new Error("Failed to fetch all products");
  }
};

export const getProductByCategory = async (
  category: string
): Promise<Product[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/api/products/category/${category}`,
      {
        cache: "no-cache",
      }
    );

    if (!res.ok) throw new Error("Failed to fetch category products");
    const data = await res.json();
    return data.products;
  } catch {
    throw new Error("Failed to fetch category products");
  }
};

export const getRandomProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/api/products/random`, {
      cache: "no-cache",
    });

    if (!res.ok) throw new Error("Failed to fetch random products");
    const data = await res.json();
    return data.products;
  } catch {
    throw new Error("Failed to fetch random products");
  }
};

export const getProductDetails = async (slug: string): Promise<Product> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/api/products/slug/${slug}`,
      {
        cache: "no-cache",
      }
    );

    if (!res.ok) throw new Error("Failed to fetch product details");
    const data = await res.json();
    return data.product;
  } catch {
    throw new Error("Failed to fetch product details");
  }
};

export const searchProducts = async (query: string): Promise<Product[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/api/products/search?query=${query}`,
      {
        cache: "no-cache",
      }
    );

    if (!res.ok) throw new Error("Failed to search products");
    const data = await res.json();
    return data.products;
  } catch {
    throw new Error("Failed to search products");
  }
};
