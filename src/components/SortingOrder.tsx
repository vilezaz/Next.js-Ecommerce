"use client";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

const SortingOrder = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createSortLink = (sortValue: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortValue);
    return `${pathname}?${params.toString()}`;
  };

  return (
    <aside className="hidden md:block px-8">
      <strong className="text-gray-400 text-sm">Sort by</strong>
      <div className="flex flex-col py-2 space-y-1">
        <Link className="hover:underline" href={createSortLink("price-asc")}>
          Price: Low to High
        </Link>
        <Link className="hover:underline" href={createSortLink("price-desc")}>
          Price: High to Low
        </Link>
      </div>
    </aside>
  );
};

export default SortingOrder;
