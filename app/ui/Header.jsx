import Link from "next/link";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { auth } from "@/auth";

export default async function Header() {

   const session = await auth()

   return (
      <header
         className="bg-blue-500 text-slate-50 p-4 rounded-full flex justify-between items-center w-full dark:bg-slate-800"
      >
         <Link
            href={'/'}
            className="hover:underline"
         >
            <Logo />
         </Link>

         <div>
            <Navigation session={session} />
         </div>
      </header>
   )
}
