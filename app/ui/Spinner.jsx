import Image from "next/image";

export default function Spinner() {
   return (
      <div className="h-16 w-16 relative mx-auto flex items-center justify-center ">
         <Image 
            src={ '/spinner.gif' }
            alt="loading spinner"
            fill
            sizes="50vh"
            quality={ 75 }
            className="object-cover"
         />
      </div>
   )
}
