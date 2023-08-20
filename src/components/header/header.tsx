import { useHistory } from 'react-router-dom'
import { StringParam, useQueryParams, withDefault } from 'use-query-params'
import logo from '../../assets/Logo_ML.png'
import search from '../../assets/ic_Search.png'
import { useGetItems } from '../../hooks/use-get-items'
import './header.scss'

const SearchInput = () => {
  const [params, setParams] = useQueryParams({
    q: withDefault(StringParam, '')
  })

  const { refetch } = useGetItems()
  const history = useHistory()

  const onSearch = () => {
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
        onClick={() => onSearch()}
      >
        <img src={search} alt="Search" />
      </button>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <img src={logo} alt="Mercado Livre" />

          <SearchInput />
        </div>
      </div>
    </div>
  )
}