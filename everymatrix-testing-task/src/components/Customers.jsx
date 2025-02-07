import Image from "next/image"

import getIcon from "@/utils/getSVGIcon"

import annSrc from "../../public/ann.png"

import "@/styles/customers.scss"

const Customers = () => {
  return (
    <section className='customers-container'>
      <div className='customers-header'>
        <h2>our happy customers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </div>
      <div className='customers-cards'>
        <div className='card'>
          <Image
            src={annSrc}
            alt='ann'
            className='image'
          />
          <h3>Ann lubin</h3>
          <p className='position'>co-founder</p>
          <p className='desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
        <div className='card center'>
          <Image
            src={annSrc}
            alt='ann'
            className='image'
          />
          <h3>Ann lubin</h3>
          <p className='position'>co-founder</p>
          <p className='desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
        <div className='card'>
          <Image
            src={annSrc}
            alt='ann'
            className='image'
          />
          <h3>Ann lubin</h3>
          <p className='position'>co-founder</p>
          <p className='desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
      </div>
      <div className='pagination'>{getIcon("pagination")}</div>
    </section>
  )
}
export default Customers
