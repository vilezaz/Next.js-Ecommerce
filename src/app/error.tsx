"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-[90vh] bg-[#171717] flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-2xl font-bold mb-2 text-red-600">Something went wrong</h1>
      <p className="mb-4 text-gray-500">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer transition"
      >
        Try Again
      </button>
    </div>
  );
}
