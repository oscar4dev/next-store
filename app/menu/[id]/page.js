import { addToCartAction } from "@/app/lib/actions"
import { getCart, getProduct } from "@/app/lib/apiServices"
import formatCurrency from "@/app/lib/formatCurrency"
import AddToCartBtn from "@/app/ui/AddToCartBtn"
import Image from "next/image"

export async function generateMetadata ({ params }) {
   const { id } = await params
   const { name } = await getProduct(id)
   return { title: `${ name }` }
}

export default async function page({ params }) {

   const { id } = await params

   const data = await getProduct(id)
   const quantity = 1
   const unitPrice = data.newPrice
   
   // const cart = await getCart()

   const cartData = {
      name: data.name,
      quantity,
      unitPrice,
      totalPrice: unitPrice * quantity,
      image: data.image,
      
   }

   return (
      <div className="w-full pb-8">
         <div className="h-60 w-full relative mt-8">
            <Image
               src={data.image}
               alt={data.name}
               fill
               className="object-cover"
            />
         </div>

         <div className="flex flex-col mt-4 px-4">
            <span
               className="text-lg capitalize"
            >{data.name}</span>

            <span className="capitalize">By: {data.company}</span>

            <div className="space-x-4">
               <span>{formatCurrency(data.newPrice)}</span>
               <span
                  className="line-through"
               >{formatCurrency(data.prevPrice)}</span>
            </div>

            {
               data.soldOut
                  ? <span className="text-red-500">Sold out</span>
                  : ''
            }

            <span>Reviews: {data.reviews}</span>

            <AddToCartBtn cartData={ cartData } />
         </div>
      </div>
   )
}