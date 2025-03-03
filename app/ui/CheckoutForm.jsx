import React from 'react'
import User from './User'

export default function CheckoutForm() {
   return (
      <>
         <User />

         <div
            className="flex items-center justify-between  max-w-[600px] mx-auto"
         >
            <label
               htmlFor="fullname"
               className="cursor-pointer"
            >
               Full name :
            </label>
            <input
               type="text"
               id="fullname"
               name="fullname"
               required
               className="border border-slate-900 p-1 sm:w-[400px] dark:bg-slate-500"
            />
         </div>

         <div
            className="flex items-center justify-between max-w-[600px] mx-auto"
         >
            <label
               htmlFor="phone"
               className="cursor-pointer"
            >
               Phone number :
            </label>
            <input
               type="number"
               id="phone"
               name="phone"
               required
               className="border border-slate-900 p-1 sm:w-[400px] dark:bg-slate-500"
            />
         </div>

         <div
            className="flex items-center justify-between max-w-[600px] mx-auto"
         >
            <label
               htmlFor="email"
               className="cursor-pointer"
            >
               Email address :
            </label>
            <input
               type="email"
               id="email"
               name="email"
               required
               className="border border-slate-900 p-1 sm:w-[400px] dark:bg-slate-500"
            />
         </div>

         <div className="mb-8 flex items-center gap-4 max-w-[600px] mx-auto">
            <label
               htmlFor="priorityStatus"
               className="cursor-pointer"
            >
               Make your order a priority
            </label>
            <input
               type="checkbox"
               id="priorityStatus"
               name="priorityStatus"
               className="h-6 w-6"
            />
         </div>
      </>
   )
}
