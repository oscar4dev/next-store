import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./ui/Header";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: '%s | Next-Store',
    default: 'Next-Store',
  },
  description: 'The Next-Store app built with App Router.',
};

const josefin = Josefin_Sans({
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <div className="flex flex-col min-h-dvh dark:bg-slate-900 dark:text-slate-50">
          <Toaster />

          <div
            className="mt-4 px-4 fixed w-full z-10"
          >
            <Header />
          </div>

          <div className="pt-24 flex-1">
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}
