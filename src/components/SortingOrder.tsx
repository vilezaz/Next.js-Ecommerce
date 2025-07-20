import Link from 'next/link'
import React from 'react'

const SortingOrder = () => {
  return (
    <aside className='px-8'>
      <strong className='text-gray-400 text-sm'>Sort by</strong>
      <div className='flex flex-col py-2 space-y-1'>
        <Link className="hover:underline" href={""}>Price: Low to High</Link>
        <Link className="hover:underline" href={""}>Price: High to Low</Link>
      </div>
    </aside>
  )
}

export default SortingOrder