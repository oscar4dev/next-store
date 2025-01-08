import Image from "next/image";
import formatCurrency from "../lib/formatCurrency";
import Link from "next/link";

export default function MenuItem({ item }) {
   return (
      <Link
         href={ `/menu/${ item.id }` } 
         className="h-[250px]"
      >
         <li className="h-full mb-8 flex items-center flex-col cursor-pointer border hover:shadow-md sm:w-[300px]">
            <div className="w-24 h-1/2 aspect-square relative">
               <Image
                  src={ item.image }
                  alt={ item.name }
                  fill
                  className="object-cover"
                  sizes="1"
               />
            </div>
            <div className="flex flex-col justify-center h-1/2">
               <span className="capitalize">{ item.name }</span>
               <span className="line-through">{ formatCurrency(item.prevPrice) }</span>
               <span>{ formatCurrency(item.newPrice) }</span>
            </div>
         </li>
      </Link>
   )
}
