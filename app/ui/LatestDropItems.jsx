import Image from "next/image";
import formatCurrency from "../lib/formatCurrency";
import Link from "next/link";

export default function LatestDropItems({ item }) {
   
   return (
      <Link href={ '/menu' }>
         <li className="max-w-[350px] mx-auto mb-8 border p-2 cursor-pointer h-[300px] hover:shadow-md sm:w-[300px]">
            <div className="h-40 relative aspect-square mx-auto mt-4">
               <Image
                  src={ item.image }
                  alt={ item.name }
                  fill
                  sizes="1"
                  className="object-cover"
               />
            </div>
            <div className="flex flex-col gap-2">
               <span className="capitalize">{ item.name }</span>
               <span>
                  { formatCurrency(item.newPrice) }
               </span>
            </div>
         </li>
      </Link>
   )
}
