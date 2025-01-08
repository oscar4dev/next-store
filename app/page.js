import Link from "next/link"
import Footer from "./ui/Footer"
import LatestDrops from "./ui/LatestDrops"
import { Suspense } from "react"
import Spinner from "./ui/Spinner"
import WeeklyPicks from "./ui/WeeklyPicks"
import HotSales from "./ui/HotSales"
import ScrollToTop from "./ui/ScrollToTop"
import { FaGithub } from "react-icons/fa";

export default async function Page() {

  return (
    <main className="lg:w-[1024px] lg:mx-auto relative">
      <div
        className="h-[400px] w-full flex flex-col items-center justify-center gap-2"
      >
        <h1 className="text-xl font-bold">The Next-Store</h1>
        <p>Ecommerce Template</p>
        <p>Built by Oscar4dev using Next.js</p>
        <Link 
          href={ 'https://github.com/oscar4dev' }
          target="_blank"
          className="flex items-center gap-2 border border-slate-900 rounded-full px-4 py-1 text-sm hover:bg-slate-100 duration-[0.5s] ease-in-out dark:border dark:border-slate-50 dark:hover:text-slate-50 dark:hover:bg-slate-700"
        >
          <span>View on GitHub</span>
          <span className="text-lg"><FaGithub /></span>
        </Link>
      </div>

      <div className="px-4">
        <div>
          <p className="flex justify-between mb-8">
            <span
              className="text-lg"
            >Latest Drops</span>
            <Link 
              href={ '/menu' }
              className="text-blue-500 hover:underline"
            >
              View all &#8599;
            </Link>
          </p>

          <Suspense fallback={ <Spinner /> }>
            <LatestDrops />
          </Suspense>
        </div>

        <div className="mt-20">
          <p className="flex justify-between mb-8">
            <span
              className="text-lg"
            >Weekly Picks</span>
            <Link 
              href={ '/menu' }
              className="text-blue-500 hover:underline"
            >View all &#8599;</Link>
          </p>

          <Suspense fallback={ <Spinner /> }>
            <WeeklyPicks />
          </Suspense>
          
        </div>

        <div className="mt-20">
          <p className="flex justify-between mb-8">
            <span
              className="text-lg"
            >Hot Sales</span>
            <Link 
              href={ '/menu' }
              className="text-blue-500 hover:underline"
            >View all &#8599;</Link>
          </p>

          <Suspense>
            <HotSales />
          </Suspense>
        </div>

      </div> 

      <footer className="mt-14 py-8 px-4 border-t">
        <Footer />
      </footer>

      <div className="fixed bottom-8 right-4 z-10">
        <ScrollToTop />
      </div>
    </main>
  )
}
