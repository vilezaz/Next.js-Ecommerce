"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { AiFillCheckCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { clearCart } from "@/redux/slices/cartSlice";
import Link from "next/link";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (sessionId) {
      fetch("/api/checkout/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      })
        .then(() => {
          dispatch(clearCart());
        })
        .catch((err) => {
          console.error("Failed to confirm checkout:", err);
        });
    }
  }, [sessionId, dispatch]);

  return (
    <div className="min-h-screen flex bg-[#171717] text-white items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#000000] shadow-xl rounded-2xl p-8 text-center border border-gray-600">
        <AiFillCheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h1 className="text-2xl md:text-3xl font-bold text-primary-700 mb-2">
          Payment Successful!
        </h1>
        <p className=" mb-6">
          Thank you for your order. Your payment has been processed successfully.
        </p>
        <div className="flex justify-center gap-3">
          <Link
          href="/search"
          className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg bg-blue-500 hover:bg-blue-600 transition"
        >
          Continue Shopping
        </Link>
          <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg bg-red-500 hover:bg-red-600 transition"
        >
          Cancel
        </Link>
        </div>
      </div>
    </div>
  );
}
