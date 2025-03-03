import { LogOut } from '../lib/actions'

export default function page() {
   return (
      <form
         action={LogOut}
         className='flex flex-col items-center justify-center gap-4 mt-12'
      >
         <p>Continue to logout</p>
         <button className='bg-red-500 text-slate-50 w-[300px] rounded-full py-2 hover:opacity-80 duration-300 ease-in-out'>
            Log out
         </button>
      </form>
   )
}
