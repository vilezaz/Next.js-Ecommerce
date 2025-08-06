"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      fetch("/api/checkout/confirm", {
        method: "POST",
        body: JSON.stringify({ sessionId }),
      });
    }
  }, [sessionId]);

  return <div className="p-4 text-xl">✅ Payment Successful! Thank you for your order.</div>;
}
