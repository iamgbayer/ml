import { useHistory } from 'react-router-dom'
import logo from '../../assets/Logo_ML.png'
import './header.scss'
import { SearchInput } from './search-input/search-input'

export const Header = () => {
  const history = useHistory()

  const handleLogoClick = () => {
    history.push('/')
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <img
            className="header__logo"
            onClick={handleLogoClick}
            src={logo}
            alt="Mercado Livre"
          />

          <SearchInput />
        </div>
      </div>
    </div>
  )
}
