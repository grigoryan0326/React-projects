import { Josefin_Sans } from "next/font/google"
import "./globals.scss"

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-josefin",
})

export const metadata = {
  title: "Appolly",
  description: "Testing task from EveryMatrix",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={josefin.variable}>{children}</body>
    </html>
  )
}
