import { useSelector, useDispatch } from "react-redux"
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs"
import {
  selectAuthorFilter,
  selectTitleFilter,
  selectOnlyFavoriteFilter,
} from "../../redux/slices/filterSlice"
import {
  deleteBook,
  selectBooks,
  toggleFavorite,
} from "../../redux/slices/booksSlice"
import "./BookList.css"

const BookList = () => {
  const books = useSelector(selectBooks)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const isFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

  const dispatch = useDispatch()

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id))
  }

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())

    const matchesFavorite = isFavoriteFilter ? book.isFavorite : true
    return matchesTitle && matchesAuthor && matchesFavorite
  })

  const higlightMatch = (text, filter) => {
    if (!filter) return text
    const regexp = new RegExp(`(${filter})`, "gi")

    return text.split(regexp).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span
            key={i}
            className='highlight'
          >
            {substring}
          </span>
        )
      }
      return substring
    })
  }

  return (
    <div className='app-block book-list'>
      <h2>Book list</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
            <li key={book.id}>
              <div className='book-info'>
                {++i}. {higlightMatch(book.title, titleFilter)} by
                <strong> {higlightMatch(book.author, authorFilter)}</strong> (
                {book.source})
              </div>
              <div className='book-actions'>
                <span onClick={() => handleToggleFavorite(book.id)}>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className='star-icon' />
                  ) : (
                    <BsBookmarkStar className='star-icon' />
                  )}
                </span>
                <button onClick={() => dispatch(deleteBook(book.id))}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
