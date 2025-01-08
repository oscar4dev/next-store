import { getProducts } from "../lib/apiServices"
import WeeklyPickItems from "./WeeklyPickItems"

export default async function WeeklyPicks() {

   const data = await getProducts()
   const weeklyPicks = data.slice(3, 6)

   return (
      <ul className="sm:flex sm:justify-center sm:items-center sm:flex-wrap gap-4 lg:w-[1024px] lg:mx-auto">
         {
            weeklyPicks.map((item) => {
               return <WeeklyPickItems
                  key={item.id}
                  item={item}
               />
            })
         }
      </ul>
   )
}
