import Link from "next/link";
import React from "react";

const CollectionSidebar = () => {
  return (
    <aside className="px-5 mr-10">
      <strong className="text-gray-400 text-sm">Collections</strong>
      <div className="flex flex-col py-2 space-y-1">
        <Link className="hover:underline" href={"/all"}>All</Link>
        <Link className="hover:underline" href={"/shoes"}>Shoes</Link>
        <Link className="hover:underline" href={"/shirts"}>Shirts</Link>
        <Link className="hover:underline" href={"/electronics"}>Electronics</Link>
      </div>
    </aside>
  );
};

export default CollectionSidebar;
