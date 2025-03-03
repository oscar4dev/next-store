import { auth } from "@/auth"

export default async function User() {

   const session = await auth()

   return (
      <div>
         <p className="text-center text-green-500">
            <span className="text-slate-900">{ session?.user?.name }</span>,
            all data will be encrypted.
         </p>
      </div>
   )
}
