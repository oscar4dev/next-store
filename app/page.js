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
        className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 h-[500px] w-full flex flex-col items-center justify-center gap-2 dark:text-slate-900"
      >
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-fuchsia-500 to-pink-800">The Next-Store</h1>
        <p>Ecommerce Template</p>
        <p>Built by Oscar4dev using Next.js</p>
        <Link
          href={'https://github.com/oscar4dev'}
          target="_blank"
          className="mt-8 flex items-center justify-center gap-2 rounded-full w-[300px] py-2 text-sm bg-blue-500 text-slate-50 hover:opacity-80 duration-300 ease-in-out dark:bg-slate-800"
        >
          <span>View on GitHub</span>
          <span className="text-lg"><FaGithub /></span>
        </Link>
      </div>

      <div className="px-4">
        <div className="pt-8">
          <p className="flex justify-between mb-8">
            <span
              className="text-lg"
            >Latest Drops</span>
            <Link
              href={'/menu'}
              className="text-blue-500 hover:underline"
            >
              View all &#8599;
            </Link>
          </p>

          <Suspense fallback={<Spinner />}>
            <LatestDrops />
          </Suspense>
        </div>

        <div className="mt-20">
          <p className="flex justify-between mb-8">
            <span
              className="text-lg"
            >Weekly Picks</span>
            <Link
              href={'/menu'}
              className="text-blue-500 hover:underline"
            >View all &#8599;</Link>
          </p>

          <Suspense fallback={<Spinner />}>
            <WeeklyPicks />
          </Suspense>

        </div>

        <div className="mt-20">
          <p className="flex justify-between mb-8">
            <span
              className="text-lg"
            >Hot Sales</span>
            <Link
              href={'/menu'}
              className="text-blue-500 hover:underline"
            >View all &#8599;</Link>
          </p>

          <Suspense fallback={<Spinner />}>
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
