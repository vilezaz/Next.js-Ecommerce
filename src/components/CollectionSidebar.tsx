import Link from "next/link";
import React from "react";
const CollectionSidebar = () => {
  return (
    <aside className="hidden md:block px-4 pr-10 mr-7">
      <strong className="text-gray-400 text-sm">Collections</strong>
      <div className="flex flex-col py-2 space-y-1">
        <Link className="hover:underline" href={"/search"}>All</Link>
        <Link className="hover:underline" href={"/search/shirts"}>Shirts</Link>
        <Link className="hover:underline" href={"/search/shoes"}>Shoes</Link>
        <Link className="hover:underline" href={"/search/pants"}>Pants</Link>
        <Link className="hover:underline" href={"/search/caps"}>Caps</Link>
      </div>
    </aside>
  );
};
export default CollectionSidebar;