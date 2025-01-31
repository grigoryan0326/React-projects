import Image from "next/image"

import getIcon from "@/utils/getSVGIcon"

import logoSrc from "./logo.svg"
import Profile from "../profile"
import UIButton from "../ui/UIButton"

const Header = () => {
  return (
    <header className='flex h-[100px] items-center px-8 bg-white shadow-lg'>
      <Image
        src={logoSrc}
        alt='logo'
      />
      <div className='w-px h-8 bg-slate-200 mx-6'></div>
      <UIButton
        size='lg'
        variant='primary'
        className='w-[180px]'
      >
        Play
      </UIButton>
      <button className='ml-auto flex items-center gap-2 text-start text-teal-600 hover:text-teal-500 transition-colors'>
        <Profile />
        {getIcon("arrow-down")}
      </button>
    </header>
  )
}
export default Header
