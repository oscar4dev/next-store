import Link from "next/link";

export default function OrderNowBtn() {
   return (
      <Link
         href={ '/order/new' }
         className="bg-blue-500 text-slate-50 px-4 py-4 block text-center hover:bg-blue-700 duration-300 ease-in-out sm:w-1/2 sm:mx-auto"
      >
         Order Now &rarr;
      </Link>
   )
}
