"use client"

import { useEffect, useState } from "react"

import getIcon from "@/utils/getSVGIcon"

import "@/styles/footer.scss"

const Footer = () => {
  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== "undefined" ? window.outerWidth < 620 : false
  })

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.outerWidth < 620)
    }

    window.addEventListener("resize", checkScreenSize)
    checkScreenSize()

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  return (
    <footer className='footer-container'>
      <div className='footer-content container'>
        <div className='contacts'>
          <div className='item'>
            <div className='icon'>
              {getIcon("download", isMobile ? 20 : 40, isMobile ? 20 : 40)}
            </div>
            <a href='mailto:info@youremail.com'>info@youremail.com</a>
          </div>
          <div className='item'>
            <div className='icon'>
              {getIcon("phone", isMobile ? 20 : 40, isMobile ? 20 : 40)}
            </div>
            <a href='tel:+880 321 655 9985'>+880 321 655 9985</a>
          </div>
        </div>
        <div className='links'>
          <div className='logo'>
            <h3>Logo</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
            <div className='socials'>
              <a href='#'>{getIcon("facebook", 24, 24)}</a>
              <a href='#'>{getIcon("instagram", 24, 24)}</a>
              <a href='#'>{getIcon("twitter", 24, 24)}</a>
              <a href='#'>{getIcon("youtube", 24, 24)}</a>
            </div>
          </div>
          <div className='quick-links'>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>Features</a>
              </li>
              <li>
                <a href='#'>Screenshot</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='subscription'>
          <h3>news letter</h3>
          <p>Subscribe our newsletter to get our latest update & news</p>
          <form action=''>
            <input
              type='email'
              placeholder='Your email adress'
            />
            <button type='submit'>{getIcon("send")}</button>
          </form>
        </div>
      </div>
      <div className='copyright container'>
        {getIcon("copyright")}
        <p>Copyright 2021 .Ojjomedia. All Right Reserved.</p>
      </div>
    </footer>
  )
}
export default Footer
