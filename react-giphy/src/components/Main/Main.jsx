import "./Main.scss"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { BASE_URL, API_KEY } from "../../constants/constants"
import axios from "axios"
import Loader from "../UI/Loader/Loader"

const Main = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const searchQuery = useSelector((state) => state.search.value)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setData([])
      try {
        const response = await axios.get(
          `${BASE_URL}search?q=${searchQuery}&api_key=${API_KEY}`
        )
        console.log(response)

        if (response.status >= 200 && response.status < 300)
          setData(response.data.data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [searchQuery])

  return (
    <div className='main'>
      <div className='loader'>{isLoading && <Loader />}</div>
      <ul className='gifs'>
        {data.map((gif) => {
          return (
            <li
              key={gif.id}
              className='gifs__item'
            >
              <img
                src={gif.images.original.url}
                alt={gif.title || "gif"}
                className='gifs__item-img'
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Main
