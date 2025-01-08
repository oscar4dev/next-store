import React from 'react'
import { getOrders } from '../lib/apiServices';
import OrderItems from '../ui/OrderItems';
import Link from 'next/link';

export const metadata = {
   title: 'Order'
}

export default async function page() {

   const order = await getOrders()   

   if (!order.length) return (
      <p
         className='px-4 py-8'
      >
         You currently haven&apos;t placed any order. Go to the
         <Link href={ '/menu' } className='mx-1 text-blue-500 hover:underline'>menu</Link>
         to order for at least one item 😎!
      </p>
   )

   return (
      <div
         className='px-4 py-8 space-y-4 max-w-[1024px] mx-auto'
      >
         <p>
            Your order history
         </p>
         <ul className='space-y-8'>
            {
               order.map(( item ) => {
                  return <OrderItems 
                     key={ item.id }
                     item={ item }
                  />
               })
            }
         </ul>
      </div>
   )
}
