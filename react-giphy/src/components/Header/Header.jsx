import { useState } from "react"
import { FaSearch } from "react-icons/fa"

import icon from "../../assets/svg/giphy-svgrepo-com.svg"

import "./Header.scss"
import { useDispatch } from "react-redux"
import { setSearch } from "../../redux/searchSlice"

const Header = () => {
  const [searchValue, setSearchValue] = useState("")

  const dispatch = useDispatch()

  const handleSearch = () => {
    dispatch(setSearch(searchValue))
  }

  return (
    <div className='header__container'>
      <div className='header'>
        <div className='header__logo'>
          <img
            src={icon}
            alt='logo'
            className='header__logo-img'
          />
          <p className='header__title'>Giphy</p>
        </div>
      </div>
      <div className='header__search'>
        <input
          className='header__search-input'
          type='text'
          placeholder='Search for the gifs'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className='header__search-button' onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
    </div>
  )
}
export default Header