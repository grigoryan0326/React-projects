import { useSelector } from "react-redux"
import Header from "../../components/Header/Header"
import Main from "../../components/Main/Main"

import "./Home.scss"

const Home = () => {
  const searchValue = useSelector((state) => state.search.value)

  return (
    <div className='Home'>
      <Header />
      <Main />
    </div>
  )
}
export default Home
