import { getProducts } from "../lib/apiServices"
import HotSaleItem from "./HotSaleItem"

export default async function HotSales() {

   const data = await getProducts()
   const hotSale = data.slice(6, 9)

   return (
      <ul className="sm:flex sm:justify-center sm:items-center sm:flex-wrap gap-4 lg:w-[1024px] lg:mx-auto">
         {
            hotSale.map((item) => {
               return <HotSaleItem
                  key={item.id}
                  item={item}
               />
            })
         }
      </ul>
   )
}
