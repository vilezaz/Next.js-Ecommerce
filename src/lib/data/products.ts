export type Product = {
  id: string,
  title: string,
  category: string,
  price: number,
  image: string
}

export const products: Product[] = [
  {
    id: "1",
    title: "Nike Sneakers",
    category: "shoes",
    price: 129.99,
    image: "/products/nike.jpg",
  },
  {
    id: "2",
    title: "Leather Bag",
    category: "bags",
    price: 89.99,
    image: "/products/bag.jpg",
  },
  {
    id: "3",
    title: "Printed shirts",
    category: "shirts",
    price: 59.99,
    image: "/products/shirts.jpg",
  },
  {
    id: "4",
    title: "Printed shirts",
    category: "shirts",
    price: 59.99,
    image: "/products/shirts.jpg",
  },
  {
    id: "5",
    title: "Printed shirts",
    category: "shirts",
    price: 59.99,
    image: "/products/shirts.jpg",
  },
  {
    id: "6",
    title: "Printed electronics",
    category: "electronics",
    price: 59.99,
    image: "/products/electronics.jpg",
  },
];


export const getProductsByCategory = (category?: string) => {
  if (!category || category === "all") return products;
  return products.filter((p) => p.category === category);
};
