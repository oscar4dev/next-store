'use client'

import React, { useEffect, useState } from 'react'
import { FaRegLightbulb } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
 
export default function SwitchTheme768() {

   const [theme, setTheme] = useState('light')

   useEffect(() => {
      document.documentElement.className = theme
      localStorage.setItem('theme', theme)
   }, [theme])

   function toggleTheme () {
      setTheme((cur) => {
         return cur === 'light' ? 'dark' : 'light'
      })
   }

   return (
      <button
         onClick={ toggleTheme }
         className='flex items-center gap-2'
         title={ `Switch to ${ theme === 'light' ? 'dark' : 'light' }` }
      >
         {
            theme === 'light' 
               ? <span className='text-slate-900'>
                  <FaLightbulb /> 
               </span>
               : <FaRegLightbulb />
         }
      </button>
   )
}
