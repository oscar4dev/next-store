'use client'

import Link from "next/link";

import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { PiSignInFill } from "react-icons/pi";
import { MdSearch } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMenuBook } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { PiSignOutFill } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

import SwitchTheme from "./SwitchTheme";
import useOutsideClick from "./useOutsideClick";
import SwitchTheme768 from "./SwitchTheme768";

export default function Navigation({ session }) {

   const [isOpen, setIsOpen] = useState(false)
   const ref = useRef(null)

   useOutsideClick(ref, () => setIsOpen(false))

   const pathname = usePathname()

   function toggleState() {
      setIsOpen((prevState) => !prevState)
   }

   return (
      <nav className="flex items-center relative">
         <ul className="flex items-center gap-4">
            <li className="p-1 hover:underline hidden sm:block">
               <Link href={'/'}
                  className={pathname === '/' ? 'underline' : ''}
               >Home</Link>
            </li>

            <li className="p-1 hidden sm:block hover:underline">
               <Link
                  href={'/menu'}
                  className={pathname === '/menu' ? 'underline' : ''}
               >Menu</Link>
            </li>

            <li className="p-1 hidden sm:block hover:underline">
               <Link
                  href={'/cart'}
                  className={pathname === '/cart' ? 'underline' : ''}
               >Cart</Link>
            </li>

            <li className="p-1 hover:underline hidden sm:block">
               <Link
                  href={'/search'}
                  className={pathname === '/search' ? 'underline' : ''}
               >Search</Link>
            </li>

            <li className="p-1 hover:underline hidden sm:block">
               {
                  session?.user
                     ? <Link
                        href={'/logout'}
                        className={`flex items-center gap-1 ${pathname === '/logout' ? 'underline' : ''}`}
                     >
                        <span>Logout</span>
                     </Link>
                     : <Link
                        href={'/login'}
                        className={`flex items-center gap-1 ${pathname === '/login' ? 'underline' : ''}`}
                     >
                        <span><PiSignInFill /></span>
                        <span>Login</span>
                     </Link>
               }
            </li>
         </ul>

         <button
            className="sm:hidden text-xl"
            onClick={toggleState}
         >
            {
               isOpen ? <IoMdClose /> : <IoMdMenu />
            }
         </button>

         <div className="hidden ml-4 sm:block">
            <SwitchTheme768 />
         </div>

         {
            isOpen && <ul
               ref={ref}
               className="z-30 fixed top-[82px] right-1 rounded-md bottom-3 bg-blue-500 w-1/2 p-4 flex flex-col gap-8 dark:bg-slate-800"
            >
               <li className="mt-4">
                  <Link href={'/'}
                     onClick={() => setIsOpen(false)}
                     className={`flex items-center gap-2 ${pathname === '/' ? 'underline' : ''}`}
                  >
                     <span><IoHomeOutline /></span>
                     <span>Home</span>
                  </Link>
               </li>

               <li className="">
                  <Link
                     href={'/menu'}
                     onClick={() => setIsOpen(false)}
                     className={`flex items-center gap-2 ${pathname === '/menu' ? 'underline' : ''}`}
                  >
                     <span><MdOutlineMenuBook /></span>
                     <span>Menu</span>
                  </Link>
               </li>

               <li className="">
                  <Link
                     href={'/cart'}
                     className={`flex items-center gap-2 ${pathname === '/cart' ? 'underline' : ''}`}
                     onClick={() => setIsOpen(false)}
                  >
                     <span><IoCartOutline /></span>
                     <span>Cart</span>
                  </Link>
               </li>

               <li className="">
                  <Link
                     href={'/search'}
                     className={'flex items-center gap-2'}
                     onClick={() => setIsOpen(false)}
                  >
                     <span><MdSearch /></span>
                     <span>Search</span>
                  </Link>
               </li>

               <div className="">
                  <SwitchTheme />
               </div>

               <li className="">
                  {
                     session?.user
                        ? <Link
                           href={'/logout'}
                           className={`flex items-center gap-2 ${pathname === '/logout' ? 'underline' : ''}`}
                           onClick={() => setIsOpen(false)}
                        >
                           <span><PiSignOutFill /></span>
                           <span>Logout</span>
                        </Link>
                        : <Link
                           href={'/login'}
                           className={`flex items-center gap-2 ${pathname === '/login' ? 'underline' : ''}`}
                           onClick={() => setIsOpen(false)}
                        >
                           <span><PiSignInFill /></span>
                           <span>Login</span>
                        </Link>
                  }
               </li>
            </ul>
         }
      </nav>
   )
}
