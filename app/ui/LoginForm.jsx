import { SignIn } from "../lib/actions";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
   return (
      <form 
         action={ SignIn }
         className="flex flex-col items-center justify-center"
      >
         <p>
            <button
               className="flex items-center justify-center gap-2 bg-blue-500 text-slate-50 rounded-full w-[300px] py-2 hover:opacity-80 duration-300 ease-in-out"
            >
               <span><FcGoogle /></span>
               <span>Sign in with Google</span>
            </button>
         </p>
      </form>
   )
}
