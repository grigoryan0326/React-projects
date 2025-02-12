import { useRouter } from "next/router"
import Link from "next/link"

import getIcon from "@/utils/getSVGIcon"

const BackLink = () => {
  const router = useRouter()

  const handleLinkClick = (e) => {
    e.preventDefault()
    router.back()
  }

  return (
    <Link
      href='/'
      className='flex items-center gap-2 text-xs text-teal-600 bg-transparent leading-tight -mb-0.5'
      onClick={(e) => handleLinkClick(e)}
    >
      {getIcon("arrow-left")}
      Home
    </Link>
  )
}
export default BackLink
