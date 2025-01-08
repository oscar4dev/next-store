'use client'

import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {

   function handleScrollToTop () {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      })
   }

   return (
      <button
         onClick={ handleScrollToTop }
         className="border h-8 w-8 flex items-center justify-center bg-slate-200 dark:bg-slate-800"
      >
         <FaArrowUp />
      </button>
   )
}
