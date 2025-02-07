import Image from "next/image"

import Hero from "./Hero"

import logoSrc from "../../public/logo.png"
import getIcon from "@/utils/getSVGIcon"

import "@/styles/header.scss"

const Header = () => {
  return (
    <div className='bg-container'>
      <header className='container header-container'>
        <div className='sub-header'>
          <div className='contacts'>
            <div className='contacts-item'>
              {getIcon("mail")}
              <a href='mailto:Info@youremail.com'>Info@youremail.com</a>
            </div>
            <div className='contacts-item'>
              {getIcon("phone")}
              <a href='tel:(480) 555-0103'>(480) 555-0103</a>
            </div>
          </div>
          <div className='socials'>
            <a href='https://facebook.com'>{getIcon("facebook")}</a>
            <a href='https://instagram.com'>{getIcon("instagram")}</a>
            <a href='https://twitter.com'>{getIcon("twitter")}</a>
            <a href='https://youtube.com'>{getIcon("youtube")}</a>
          </div>
        </div>

        <div className='header'>
          <div className='left'>
            <a
              href='#'
              className='active'
            >
              Home
            </a>
            <a href='#'>About</a>
            <a href='#'>Features</a>
          </div>
          <div className='burger'>{getIcon("burger")}</div>
          <div className='logo'>
            <Image
              src={logoSrc}
              alt='logo'
              className='logo-img'
              priority
            />
          </div>
          <div className='right'>
            <a href='#'>Screenshot</a>
            <a href='#'>Blog</a>
            <button>Download</button>
          </div>
        </div>
      </header>
      <Hero />
    </div>
  )
}
export default Header
