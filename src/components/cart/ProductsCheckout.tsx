'use client';

import React, { useState } from "react";
import { BiDollar } from "react-icons/bi";

type Props = {
  totalAmount: () => number;
};

const ProductsCheckout = ({ totalAmount }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        credentials: "include",
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between border-b border-gray-600 p-1.5">
        <p className="text-sm text-gray-400">Taxes</p>
        <strong className="flex items-center">
          <BiDollar />
          <span>0.00</span>
          <span className="text-sm text-gray-400 ml-1">USD</span>
        </strong>
      </div>
      <div className="flex justify-between border-b border-gray-600 p-1.5">
        <p className="text-sm text-gray-400">Shipping</p>
        <span className="text-sm text-gray-400">Check at Checkout</span>
      </div>
      <div className="flex justify-between border-b border-gray-600 p-1.5">
        <p className="text-sm text-gray-400">Total</p>
        <strong className="flex items-center">
          <BiDollar />
          {totalAmount().toFixed(2)}
          <span className="text-sm text-gray-400 ml-1">USD</span>
        </strong>
      </div>

      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`rounded-full text-center font-semibold px-3 py-2.5 my-2 transition-colors duration-300 w-full text-white cursor-pointer ${
          loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
        }`}>
        {loading ? "Redirecting..." : "Proceed to Checkout"}
      </button>
    </div>
  );
};

export default ProductsCheckout;
