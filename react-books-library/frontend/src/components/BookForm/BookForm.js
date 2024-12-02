import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FaSpinner } from "react-icons/fa"
import { addBook } from "../../redux/slices/booksSlice"
import { selectIsLoadingViaAPI } from "../../redux/slices/booksSlice"
import booksData from "../../data/books.json"
import createBookWithId from "../../utils/createBookWithId"
import { fetchBook } from "../../redux/slices/booksSlice"
import { setError } from "../../redux/slices/errorSlice"
import { Loader } from "../UX/Loader"
import "../BookForm/BookForm.css"

const BookForm = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoadingViaAPI)

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length + 1)
    const randomBook = booksData[randomIndex]
    const randomBookWithId = createBookWithId(randomBook, "random")
    dispatch(addBook(randomBookWithId))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      const book = createBookWithId({ title, author }, "manual")
      dispatch(addBook(book))
      setAuthor("")
      setTitle("")
    } else {
      dispatch(setError("You must fill title and author!"))
    }
  }

  const handleAddRandomBookViaApi = () => {
    dispatch(fetchBook("http://localhost:4000/random-book-delayed"))
  }

  return (
    <div className='app-block book-form'>
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Title: </label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor='author'>Author: </label>
          <input
            type='text'
            id='author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <div className="bookFormActions">
          <button type='submit'>Add Book</button>
          <button
            type='button'
            onClick={handleAddRandomBook}
          >
            Add Random
          </button>
          <button
            type='button'
            onClick={handleAddRandomBookViaApi}
            disabled={isLoading}
          >
            {isLoading ? <Loader /> : "Add via API"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default BookForm
