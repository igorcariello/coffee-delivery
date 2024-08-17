import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/Logo.svg'

export function Header() {
  const logoSVG = logo

  return (
    <HeaderContainer>
      <img src={logoSVG} alt="Logo da marca Coffee Delivery" />
      <nav>
        <div className="locale">
          <MapPin weight="fill" />
          Bom Jardim, RJ
        </div>
        <button className="shoppingCart">
          <ShoppingCart weight="fill" />
          {/* <span>0</span> */}
        </button>
      </nav>
    </HeaderContainer>
  )
}
