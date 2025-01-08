import { createOrder } from "@/app/lib/actions";
import { getCart } from "@/app/lib/apiServices";
import CreateOrderBtn from "@/app/ui/CreateOrderBtn";

export const metadata = {
   title: 'New order'
}

export default async function page() {

   const cart = await getCart()

   const createOrderWithData = createOrder.bind(null, cart)   

   return (
      <form 
         action={ createOrderWithData }
         className="px-4 min-h-dvh space-y-4 max-w-[1024px] mx-auto"
      >
         <div
            className="flex items-center justify-between max-w-[600px] mx-auto"
         >
            <label 
               htmlFor="fullname"
               className="cursor-pointer"
            >
               Full name :
            </label>
            <input 
               type="text"
               id="fullname"
               name="fullname"
               required
               className="border border-slate-900 p-1 sm:w-[400px] dark:bg-slate-500"
            />
         </div>

         <div
            className="flex items-center justify-between max-w-[600px] mx-auto"
         >
            <label 
               htmlFor="phone"
               className="cursor-pointer"
            >
               Phone number :
            </label>
            <input 
               type="number"
               id="phone"
               name="phone"
               required
               className="border border-slate-900 p-1 sm:w-[400px] dark:bg-slate-500"
            />
         </div>

         <div
            className="flex items-center justify-between max-w-[600px] mx-auto"
         >
            <label 
               htmlFor="email"
               className="cursor-pointer"
            >
               Email address :
            </label>
            <input 
               type="email"
               id="email"
               name="email"
               required
               className="border border-slate-900 p-1 sm:w-[400px] dark:bg-slate-500"
            />
         </div>

         <div className="mb-8 flex items-center gap-4 max-w-[600px] mx-auto">
            <label 
               htmlFor="priorityStatus"
               className="cursor-pointer"
            >
               Make your order a priority
            </label>
            <input 
               type="checkbox"
               id="priorityStatus"
               name="priorityStatus"
               className="h-6 w-6"
            />
         </div>

         <CreateOrderBtn />
      </form>
   )
}
