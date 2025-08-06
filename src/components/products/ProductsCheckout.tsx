import Link from "next/link";
import React from "react";

type Props = {
  totalAmount: () => number;
};

const ProductsCheckout = ({ totalAmount }: Props) => {
  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      credentials: "include",
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between border-b border-gray-600 p-1.5">
        <p className="text-sm text-gray-400">Taxes</p>
        <strong>$0.00</strong>
      </div>
      <div className="flex justify-between border-b border-gray-600 p-1.5">
        <p className="text-sm text-gray-400">Shipping</p>
        <span className="text-sm text-gray-400">Check at Checkout</span>
      </div>
      <div className="flex justify-between border-b border-gray-600 p-1.5">
        <p className="text-sm text-gray-400">Total</p>
        <strong>${totalAmount().toFixed(2)}</strong>
      </div>
      <button
        onClick={handleCheckout}
        className="rounded-full text-center font-semibold px-3 py-2.5 my-2 transition-colors duration-300 w-full bg-blue-500 hover:bg-blue-600 text-white cursor-pointer">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default ProductsCheckout;
