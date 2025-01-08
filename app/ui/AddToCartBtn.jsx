'use client'

import toast from "react-hot-toast";
import { addToCartAction } from "../lib/actions";

export default function AddToCartBtn( {cartData} ) {

   const addToCartActionWithData = addToCartAction.bind(null, cartData)

   return (
      <form action={ addToCartActionWithData }>      
         <button 
            onClick={ () => { toast.success('Successfully added to your cart!') } }
            className="bg-blue-500 block w-1/2 text-slate-50 py-2"
         >
            Add
         </button> 
      </form>
   )
}

