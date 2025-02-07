import Image from "next/image"
import getIcon from "@/utils/getSVGIcon"

import carlaSrc from "../../public/carla.png"
import craigSrc from "../../public/craig.png"
import jocelynSrc from "../../public/jocelyn.png"
import decoreSrc from "../../public/decore.png"

import "@/styles/team.scss"

const Team = () => {
  return (
    <section className='container team-container'>
      <div className='team-header'>
        <h2>Our reative team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </div>
      <div className='team-content'>
        <div className='item'>
          <div className='image-container'>
            <Image
              src={carlaSrc}
              alt='carla'
              className='image'
            />
            <Image
              src={decoreSrc}
              alt='decore'
              className='decore-image'
            />
          </div>
          <h3 className='title'>Carla Press</h3>
          <p className='position'>App developer</p>
          <p className='desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae.
          </p>
          <div className='socials'>
            <a href='#'>{getIcon("facebook", 24, 24)}</a>
            <a href='#'>{getIcon("instagram", 24, 24)}</a>
            <a href='#'>{getIcon("twitter", 24, 24)}</a>
            <a href='#'>{getIcon("youtube", 24, 24)}</a>
          </div>
        </div>
        <div className='item'>
          <div className='image-container'>
            <Image
              src={craigSrc}
              alt='craig'
              className='image'
            />
            <Image
              src={decoreSrc}
              alt='decore'
              className='decore-image'
            />
          </div>
          <h3 className='title'>Craig Gouse</h3>
          <p className='position'>UI/UX Designer</p>
          <p className='desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae.
          </p>
          <div className='socials'>
            <a href='#'>{getIcon("facebook", 24, 24)}</a>
            <a href='#'>{getIcon("instagram", 24, 24)}</a>
            <a href='#'>{getIcon("twitter", 24, 24)}</a>
            <a href='#'>{getIcon("youtube", 24, 24)}</a>
          </div>
        </div>
        <div className='item'>
          <div className='image-container'>
            <Image
              src={jocelynSrc}
              alt='jocelyn'
              className='image'
            />
            <Image
              src={decoreSrc}
              alt='decore'
              className='decore-image'
            />
          </div>
          <h3 className='title'>Jocelyn Septimus</h3>
          <p className='position'>Website developer</p>
          <p className='desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae.
          </p>
          <div className='socials'>
            <a href='#'>{getIcon("facebook", 24, 24)}</a>
            <a href='#'>{getIcon("instagram", 24, 24)}</a>
            <a href='#'>{getIcon("twitter", 24, 24)}</a>
            <a href='#'>{getIcon("youtube", 24, 24)}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Team
