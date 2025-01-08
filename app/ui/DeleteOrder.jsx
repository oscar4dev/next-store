'use client'

import toast from "react-hot-toast"
import { deleteOrder } from "../lib/actions"

export default function DeleteOrder({ id }) {   

   const deleteOrderWithId = deleteOrder.bind(null, id)

   return (
      <form action={ deleteOrderWithId }>
         <button
            onClick={ () => toast('Sucessfully deleted!') }
            className="bg-red-500 text-slate-50 px-2"
         >
            Delete order
         </button>
      </form>
   )
}
