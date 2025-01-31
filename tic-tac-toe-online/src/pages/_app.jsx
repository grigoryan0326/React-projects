import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin", "cyrillic"] })

import "../styles/globals.css"

const _app = ({ Component, pageProps }) => {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  )
}
export default _app
