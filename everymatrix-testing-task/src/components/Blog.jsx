import Image from "next/image"

import blog1src from "../../public/blog1.png"
import blog2src from "../../public/blog2.png"
import blog3src from "../../public/blog3.png"

import "@/styles/blog.scss"

const Blog = () => {
  return (
    <section className='container blog-container'>
      <div className='blog-header'>
        <h2>our recent blog</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </div>
      <div className='blog-cards'>
        <div className='card'>
          <Image
            src={blog1src}
            alt='blog1'
            className='image'
          />
          <div className='content'>
            <h3>The Snap Pixel: How It Works and How to Install </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
            <a href='#'>Read More</a>
          </div>
        </div>
        <div className='card'>
          <Image
            src={blog2src}
            alt='blog2'
            className='image'
          />
          <div className='content'>
            <h3>Global Partner Solutions: A Partnership of Innovation</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
            <a href='#'>Read More</a>
          </div>
        </div>
        <div className='card'>
          <Image
            src={blog3src}
            alt='blog3'
            className='image'
          />
          <div className='content'>
            <h3>2021: An opportunity for Snapchatters to start fresh</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
            <a href='#'>Read More</a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Blog
