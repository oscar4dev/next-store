'use client'

import { useEffect } from "react"

export default function useOutsideClick(ref, func) {

   useEffect(() => {

      function callBack (e) {
         if (!ref.current || ref.current.contains(e.target)) {
            return
         }

         func(e)
      }

      document.addEventListener('mousedown', callBack)
      document.addEventListener('touchstart', callBack)

      return () => {
         document.removeEventListener('mousedown', callBack)
         document.removeEventListener('touchstart', callBack)
      }

   }, [ref, func])

}
