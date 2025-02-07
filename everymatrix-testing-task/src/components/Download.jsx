"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import playSrc from "../../public/google-play.png"
import appSrc from "../../public/app-store.png"
import downloadSrc from "../../public/download.png"
import videoSrc from "../../public/video.png"
import getIcon from "@/utils/getSVGIcon"

import "../styles/download.scss"

const Download = () => {
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
    <>
      <section className='container download-container'>
        <div className='left'>
          <h2>Download the app</h2>
          <p className='description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
          <div className='buttons'>
            <a href='#'>
              <Image
                src={playSrc}
                alt='google play'
              />
            </a>
            <a href='#'>
              <Image
                src={appSrc}
                alt='app store'
              />
            </a>
          </div>
          <div className='numbers'>
            <div className='item'>
              {getIcon(
                "download",
                isMobile ? 14 : undefined,
                isMobile ? 14 : undefined
              )}
              <p>59865</p>
              <p className='name'>download</p>
            </div>
            <div className='item'>
              {getIcon(
                "like",
                isMobile ? 14 : undefined,
                isMobile ? 14 : undefined
              )}
              <p>29852</p>
              <p className='name'>like</p>
            </div>
            <div className='item'>
              {getIcon(
                "star",
                isMobile ? 14 : undefined,
                isMobile ? 14 : undefined
              )}
              <p>1500</p>
              <p className='name'>5 star rating</p>
            </div>
          </div>
        </div>
        <div className='right'>
          <Image
            src={downloadSrc}
            alt='download'
          />
        </div>
      </section>
      <div className='use'>
        <div className='use-content'>
          <h2>how to use the app perfectly</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
        <div className='use-img'>
          <Image
            src={videoSrc}
            alt='video'
            className='image'
          />
        </div>
      </div>
    </>
  )
}
export default Download
