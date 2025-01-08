'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { PiSignInFill } from "react-icons/pi";
import SwitchTheme from "./SwitchTheme";
import useOutsideClick from "./useOutsideClick";

export default function Navigation() {

   const [isOpen, setIsOpen] = useState(false)
   const ref = useRef(null)

   useOutsideClick(ref, () => setIsOpen(false))

   const pathname = usePathname()

   return (
      <nav className="flex items-center relative">
         <ul className="flex items-center gap-4">
            <li className="p-1 hover:underline hidden sm:block">
               <Link href={ '/' }
                  className={ pathname === '/' ? 'underline' : '' }
               >Home</Link>
            </li>

            <li className="p-1 hover:underline">
               <Link 
                  href={ '/menu' }
                  className={ pathname === '/menu' ? 'underline' : '' }
               >Menu</Link>
            </li>

            <li className="p-1 hover:underline">
               <Link 
                  href={ '/cart' }
                  className={ pathname === '/cart' ? 'underline' : '' }
               >Cart</Link>
            </li>

            <li className="p-1 hover:underline hidden sm:block">
               <Link 
                  href={ '/search' }
                  className={ pathname === '/search' ? 'underline' : '' }
               >Search</Link>
            </li>

            <li className="p-1 hover:underline hidden sm:block">
               <Link 
                  href={ '/account' }
                  className={ pathname === '/account' ? 'underline' : '' }
               >Account</Link>
            </li>

         </ul>

         <div className="mx-4">
            <SwitchTheme />
         </div>

         <button
            className="sm:hidden text-xl"
            onClick={ () => setIsOpen(true) }
         >
            <IoMdMenu />
         </button>

         {
            isOpen && <ul
               ref={ ref }
               className="z-20 fixed top-0 right-0 bottom-0 bg-blue-500 w-1/2 px-4 flex flex-col gap-8 dark:bg-slate-800"
            >
               <div className="flex justify-end text-xl pt-10 pr-4">
                  <button
                     onClick={ () => setIsOpen(false) }
                  >
                     <IoMdClose />
                  </button>
               </div>

               <li className="mt-4">
                  <Link href={ '/' }
                  onClick={ () => setIsOpen(false) }
                     className={ pathname === '/' ? 'underline' : '' }
                  >Home</Link>
               </li>

               <li className="">
                  <Link 
                     href={ '/menu' }
                     onClick={ () => setIsOpen(false) }
                     className={ '' }
                  >Menu</Link>
               </li>

               <li className="">
                  <Link 
                     href={ '/cart' }
                     className={ '' }
                     onClick={ () => setIsOpen(false) }
                  >Cart</Link>
               </li>

               <li className="">
                  <Link 
                     href={ '/search' }
                     className={ '' }
                     onClick={ () => setIsOpen(false) }
                  >Search</Link>
               </li>

               <li className="mt-auto mb-4">
                  <Link 
                     href={ '/account' }
                     className='text-xl'
                     onClick={ () => setIsOpen(false) }
                  >
                     <PiSignInFill />
                  </Link>
               </li>
            </ul>
         }
      </nav>
   )
}
