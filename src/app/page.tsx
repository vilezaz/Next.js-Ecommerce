import RandomProducts from "@/components/RandomProducts";

export default function HomePage() {
  
  return (
    <main className="min-h-[80vh] bg-[#171717]">
      <div className="flex space-x-5 mb-5">
        <div className="bg-[#000000] w-4/6 h-[60vh] rounded-md"></div>
        <div className="w-2/6 space-y-5">
          <div className="w-full h-[28.5vh] bg-[#000000] rounded-md"></div>
          <div className="w-full h-[28.5vh] bg-[#000000] rounded-md"></div>
        </div>
      </div>

      <RandomProducts />
    </main>
  );
}
