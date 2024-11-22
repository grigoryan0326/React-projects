import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  resetFilters,
} from "../../redux/slices/filterSlice"
import { useDispatch, useSelector } from "react-redux"
import "./Filter.css"

const Filter = () => {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

  const handleResetFilters = () => dispatch(resetFilters())
  const handleOnlyFavoriteFilter = () => dispatch(setOnlyFavoriteFilter())

  return (
    <div className='app-block filter'>
      <div className='filter-row'>
        <div className='filter-group'>
          <input
            onChange={(e) => dispatch(setTitleFilter(e.target.value))}
            type='text'
            placeholder='Filter by title...'
            value={titleFilter}
          />
          <input
            onChange={(e) => dispatch(setAuthorFilter(e.target.value))}
            type='text'
            placeholder='Filter by author...'
            value={authorFilter}
          />
        </div>
        <div className='filter-group'>
          <label>
            <input
              type='checkbox'
              checked={onlyFavoriteFilter}
              onChange={handleOnlyFavoriteFilter}
            />
            Only Favorite
          </label>
        </div>
        <button
          type='button'
          onClick={handleResetFilters}
        >
          Reset Filters
        </button>
      </div>
    </div>
  )
}

export default Filter
