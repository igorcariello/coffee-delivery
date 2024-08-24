import { HeaderContainer } from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import logo from '../../assets/Logo.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const logoSVG = logo
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  const totalItemsInCart = cart.reduce(
    (total, item) => total + Number(item.amountItem),
    0,
  )

  function handleToCheckout() {
    navigate('/checkout')
  }

  function handleToHome() {
    navigate('/')
  }

  return (
    <HeaderContainer>
      <img
        onClick={handleToHome}
        src={logoSVG}
        alt="Logo da marca Coffee Delivery"
      />
      <nav>
        <div className="locale">
          <MapPin weight="fill" />
          Bom Jardim, RJ
        </div>
        <button
          onClick={handleToCheckout}
          disabled={cart.length === 0}
          className="shoppingCart"
        >
          <ShoppingCart weight="fill" />
          {totalItemsInCart > 0 && <span>{totalItemsInCart}</span>}
        </button>
      </nav>
    </HeaderContainer>
  )
}
