'use client'

import { useFormStatus } from "react-dom";
import { deleteItem } from "../lib/actions";
import toast from "react-hot-toast";

export default function DeleteCartItem({id}) {

   const deleteItemWithId = deleteItem.bind(null, id)   

   const { pending } = useFormStatus();

   return (
      <form action={ deleteItemWithId }>
         <button 
            onClick={ () => toast('Successfully deleted!') }
            className="bg-red-500 text-slate-50 px-2 text-sm"
         >
            {pending ? "Deleting..." : "Delete"}
         </button>
      </form>
   )
}
