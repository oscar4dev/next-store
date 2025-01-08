import Link from 'next/link'
import { RiNextjsFill } from "react-icons/ri";

export default function Footer() {

   const date = new Date().getFullYear()

   return (
      <div className='flex flex-col items-center justify-center gap-4'>
         <span>
            &copy; { date } Next Store. All rights reserved.
         </span>

         <span className='flex items-center'>
            Powered by
            <Link
               href={ 'https://github.com/oscar4dev' }
               target='_blank'
               className='text-blue-500 mx-2 hover:underline dark:text-blue-500'
            >
               Oscar4dev &#8599;
            </Link>
            &
            <Link
               href={ 'https://nextjs.org/' }
               target='_blank'
               className='text-slate-900 text-xl ml-1 dark:text-blue-500'
            >
               <RiNextjsFill />
            </Link>
         </span>
      </div>
   )
}
