import { getProducts } from "../lib/apiServices"
import MenuItem from "../ui/MenuItem"
import ScrollToTop from "../ui/ScrollToTop"

export const metadata = {
   title: 'Menu'
}

export default async function Page() {

   const data = await getProducts()

   return (
      <div className="max-w-[1024px] mx-auto">
         <ul className="px-4 sm:flex sm:justify-center sm:items-center sm:gap-4 sm:flex-wrap sm:mx-auto">
            {
               data?.map((item) => {
                  return <MenuItem 
                     key={ item.id }
                     item={ item }
                  />
               })
            }
         </ul>

         <div className="fixed bottom-8 right-4 z-10">
            <ScrollToTop />
         </div>
      </div>
   )
}
