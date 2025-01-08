'use client'

import toast from "react-hot-toast"

export default function CreateOrderBtn() {
   return (
      <button
         onClick={ () => toast('Your order has been created!') }
         className="bg-blue-500 text-slate-50 px-4 py-2 w-1/2 mx-auto block hover:bg-blue-700 duration-300 ease-in-out" 
      >Create order &rarr;</button>
   )
}
