import Image from "next/image"
import getIcon from "@/utils/getSVGIcon"

import aboutSrc from "../../public/about.png"

import "@/styles/about.scss"

const About = () => {
  return (
    <section className='container about-container'>
      <div className='about-header'>
        <h2>About our app</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </div>
      <div className='about-content'>
        <div className='left'>
          <Image
            src={aboutSrc}
            alt='about'
            className='left-img'
          />
        </div>
        <div className='right'>
          <div className='item'>
            <span>{getIcon("done")}</span>
            <div className='item-content'>
              <h4>creative design</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              </p>
            </div>
          </div>
          <div className='item'>
            <span>{getIcon("done")}</span>
            <div className='item-content'>
              <h4>easy to use</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              </p>
            </div>
          </div>
          <div className='item'>
            <span>{getIcon("done")}</span>
            <div className='item-content'>
              <h4>Best user experince</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
