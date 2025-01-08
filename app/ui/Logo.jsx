import Image from "next/image";

export default function Logo() {
   return (
      <div className="flex items-center gap-2">
         <div className="relative w-8 h-8">
            <Image
               src={ '/cart-logo.png' }
               fill
               className="rounded-full"
               alt="screenshot of app logo"
               sizes="1"
            />
         </div>
         <span>Next Store</span>
      </div>
   )
}
