import Image from "next/image"

import playSrc from "../../public/google-play.png"
import appSrc from "../../public/app-store.png"
import rectangleSrc from "../../public/rectangle.png"
import mobileSrc from "../../public/mobile1.png"

import "@/styles/hero.scss"

const Hero = () => {
  return (
    <section className='container hero-section'>
      <div className='rect-container'>
        <div className='left'>
          <h1 className='title'>A Great App Makes Your Life Better</h1>
          <p className='desc'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p className='download'>Download App Now</p>
          <div className='buttons'>
            <a href='#'>
              <Image
                src={playSrc}
                alt='google play'
                className='image'
              />
            </a>
            <a href='#'>
              <Image
                src={appSrc}
                alt='app store'
                className='image'
              />
            </a>
          </div>
          <div>
            <Image
              src={rectangleSrc}
              alt='rectangle'
              className='rectangle'
            />
          </div>
        </div>
      </div>
      <div className='right'>
        <Image
          src={mobileSrc}
          alt='mobile'
          className='mobile'
        />
      </div>
    </section>
  )
}
export default Hero
