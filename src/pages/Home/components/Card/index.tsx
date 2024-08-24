import {
  CardContainer,
  ButtonsPlusAndMinus,
  ButtonsContainer,
  FooterCard,
  TagContainer,
} from './styles'
import { Plus, Minus, ShoppingCartSimple } from '@phosphor-icons/react'
import { Tag } from '../Tag'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

export interface CardProps {
  id: string
  imageCard: string
  name: string
  tagCoffee: string[]
  description: string
  valueCoffee: number
}

export function Card({
  id,
  tagCoffee,
  imageCard,
  name,
  description,
  valueCoffee,
}: CardProps) {
  const [amountItem, setAmountItem] = useState<number | string>(0)

  const isSubmitDisabled = amountItem === 0 || amountItem === '0'

  const { addItemToCart } = useContext(CartContext)

  function handleFocus() {
    setAmountItem('')
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    if (event.target.value === '') {
      setAmountItem(0)
    }
  }

  function handlePlus() {
    setAmountItem((prevState) => Math.min(Number(prevState) + 1, 99))
  }

  function handleMinus() {
    setAmountItem((prevState) => Math.max(Number(prevState) - 1, 0))
  }

  function handleAddToCart() {
    addItemToCart({
      id,
      tagCoffee,
      imageCard,
      name,
      description,
      valueCoffee,
      amountItem,
    })
  }

  const valueCoffeeString = String(valueCoffee.toFixed(2)).replace('.', ',')

  return (
    <CardContainer id={id}>
      <img src={imageCard} alt="" />
      <TagContainer>
        {tagCoffee.map((tag, index) => (
          <Tag key={index} tagName={tag} />
        ))}
      </TagContainer>
      <p>{name}</p>
      <span>{description}</span>
      <FooterCard>
        <p>
          R$<span>{valueCoffeeString}</span>
        </p>
        <ButtonsContainer>
          <ButtonsPlusAndMinus>
            <button onClick={handleMinus} className="buttonMinus">
              <Minus weight="bold" />
            </button>
            <input
              min={0}
              type="number"
              value={amountItem}
              onChange={(event) => setAmountItem(event.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <button onClick={handlePlus} className="buttonPlus">
              <Plus weight="bold" />
            </button>
          </ButtonsPlusAndMinus>
          <button disabled={isSubmitDisabled} onClick={handleAddToCart}>
            <ShoppingCartSimple weight="fill" />
          </button>
        </ButtonsContainer>
      </FooterCard>
    </CardContainer>
  )
}
