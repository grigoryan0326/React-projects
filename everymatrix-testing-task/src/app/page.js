import About from "@/components/About"
import Blog from "@/components/Blog"
import Customers from "@/components/Customers"
import Download from "@/components/Download"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Team from "@/components/Team"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Download />
        <Team />
        <Customers />
        <Blog />
      </main>
      <Footer />
    </>
  )
}
