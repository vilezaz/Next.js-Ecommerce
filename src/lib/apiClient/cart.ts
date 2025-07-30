type addToCartPayload = {
  productId: string,
  quantity?: number,
  size: string
}

export const addToCart = async (data: addToCartPayload) => {
  try {
    const res = await fetch(`http://localhost:3000/api/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Error occured while adding to cart");
    }

    return res.json();
  } catch (error: any) {
    throw new Error(error.message || "Error occured while adding to cart");
  }
};
