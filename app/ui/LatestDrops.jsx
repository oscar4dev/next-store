import { getProducts } from '../lib/apiServices'
import LatestDropItems from './LatestDropItems'

export default async function LatestDrops() {

   const data = await getProducts()
   const latestDropsSlice = data.slice(0, 3)

   return (
      <ul className="sm:flex sm:justify-center sm:items-center sm:flex-wrap gap-4 lg:w-[1024px] lg:mx-auto">
         {
            latestDropsSlice.map((item) => {
               return <LatestDropItems
                  key={ item.id }
                  item={ item } 
               />
            })
         }
      </ul>
   )
}