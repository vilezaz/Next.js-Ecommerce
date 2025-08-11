import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function Loading() {
  return (
    <div className="flex bg-[#171717] min-h-[80vh] text-white py-5 pt-20 px-4">
      {/* Sidebar Skeleton */}
      <aside className="hidden md:block px-4 pr-10 mr-7 w-40">
        <Skeleton height={16} width={100} baseColor="#2b2b2b" highlightColor="#3a3a3a" />
        <div className="flex flex-col py-2 space-y-2 mt-2">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} height={14} width={80} baseColor="#2b2b2b" highlightColor="#3a3a3a" />
          ))}
        </div>
      </aside>

      {/* Main Product Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5 grow">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="p-4 border border-transparent rounded-md bg-[#000000]">
            <Skeleton height={200} baseColor="#2b2b2b" highlightColor="#3a3a3a" />
            <Skeleton height={20} className="mt-4" baseColor="#2b2b2b" highlightColor="#3a3a3a" />
            <Skeleton height={20} width={60} className="mt-2" baseColor="#2b2b2b" highlightColor="#3a3a3a" />
            <Skeleton height={36} width={100} className="mt-4" baseColor="#2b2b2b" highlightColor="#3a3a3a" />
          </div>
        ))}
      </div>

      {/* Sorting Sidebar Skeleton */}
      <aside className="hidden md:block px-8 w-40">
        <Skeleton height={16} width={80} baseColor="#2b2b2b" highlightColor="#3a3a3a" />
        <div className="flex flex-col py-2 space-y-2 mt-2">
          {[...Array(2)].map((_, i) => (
            <Skeleton key={i} height={14} width={120} baseColor="#2b2b2b" highlightColor="#3a3a3a" />
          ))}
        </div>
      </aside>
    </div>
  );
}
