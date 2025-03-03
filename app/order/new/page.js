import { createOrder } from "@/app/lib/actions";
import { getCart } from "@/app/lib/apiServices";
import CheckoutForm from "@/app/ui/CheckoutForm";
import CreateOrderBtn from "@/app/ui/CreateOrderBtn";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata = {
   title: 'New order'
}

export default async function page() {

   const cart = await getCart()
   
   const createOrderWithData = createOrder.bind(null, cart)   
   
   const session = await auth()

   if (!session?.user) {
      redirect('login')
   }

   return (
      <form 
         action={ createOrderWithData }
         className="px-4 min-h-dvh space-y-4 max-w-[1024px] mx-auto"
      >
         <CheckoutForm />

         <CreateOrderBtn />
      </form>
   )
}
