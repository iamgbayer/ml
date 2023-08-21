import logo from '../../assets/Logo_ML.png'
import './header.scss'
import { SearchInput } from './search-input/search-input'

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
