import Image from "next/image"
import { getCart } from "../lib/apiServices"
import formatCurrency from "../lib/formatCurrency"
import OrderNowBtn from "../ui/OrderNowBtn"
import DeleteCartItem from "../ui/DeleteCartItem"

export const metadata = {
   title: 'Cart'
}

export default async function Page() {

   const cart = await getCart()

   return (
      <ul className="px-4 pb-8 space-y-4 max-w-[1024px] mx-auto">
         {
            cart.map((item, i) => {
               return <li 
                  key={ i }
                  className="flex items-center gap-2 border"
               >
                  <div className="h-20 aspect-square relative">
                     <Image 
                        src={ item.image }
                        alt={ item.name }
                        fill
                        className="object-cover"
                        sizes="50vh"
                     />
                  </div>
                  <div>
                     <p
                        className="capitalize"
                     >{ item.quantity }x { item.name }</p>
                     <p></p>
                     <p>{ formatCurrency(item.unitPrice) }</p>
                     
                     <DeleteCartItem id={ item.id } />
                  </div>
               </li>
            })
         }

         <div className="pt-8">
            <OrderNowBtn />
         </div>
      </ul>
   )
}
