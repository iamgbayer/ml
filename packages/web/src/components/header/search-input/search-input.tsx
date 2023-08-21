import { useHistory } from 'react-router-dom'
import { StringParam, useQueryParams, withDefault } from 'use-query-params'
import search from '../../../assets/ic_Search.png'
import { useGetItems } from '../../../hooks/use-get-items'
import './search-input.scss'

export const SearchInput = () => {
  const [params, setParams] = useQueryParams({
    q: withDefault(StringParam, '')
  })

  const { refetch } = useGetItems()
  const history = useHistory()

  const handleSearchClick = () => {
    refetch()

    const isAtDetailsPage = window.location.pathname.includes('/items/')

    if (isAtDetailsPage) {
      history.push(`/items?q=${params.q}`)
    }
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        className="search__input"
        data-testid="search-input"
        defaultValue={params.q}
        onChange={(event) => setParams({ q: event.target.value })}
      />

      <button
        type="submit"
        className="search__button"
        data-testid="search-button"
        onClick={handleSearchClick}
      >
        <img src={search} className="search__button-icon" alt="Search" />
      </button>
    </div>
  )
}
