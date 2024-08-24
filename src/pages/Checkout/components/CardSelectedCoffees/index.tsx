import { Minus, Plus, Trash } from '@phosphor-icons/react'
import {
  ButtonRemove,
  ButtonsContainer,
  ContainerCard,
  ImageNameAndButtons,
  NameAndButtons,
  NameContainer,
  PriceContainer,
} from './styles'
import { ButtonsPlusAndMinus } from '../../../Home/components/Card/styles'
import { useContext } from 'react'
import { CartContext, Coffee } from '../../../../contexts/CartContext'

export function CardSelectedCoffees({
  id,
  imageCard,
  name,
  tagCoffee,
  description,
  amountItem,
  valueCoffee,
}: Coffee) {
  const valueCoffeeString = String(valueCoffee.toFixed(2)).replace('.', ',')
  const { removeItemToCart, cart, updatedItemCart } = useContext(CartContext)

  function handleRemoveItem() {
    removeItemToCart({
      id,
      imageCard,
      name,
      tagCoffee,
      description,
      amountItem,
      valueCoffee,
    })
  }

  function handleFocus() {
    const updatedItem = cart.find((item) => item.id === id)

    if (updatedItem) {
      updatedItemCart({
        ...updatedItem,
        amountItem: '',
      })
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value)
    const updatedItem = cart.find((item) => item.id === id)

    if (updatedItem) {
      updatedItemCart({
        ...updatedItem,
        amountItem: value,
      })
    }
  }

  function handleBlur() {
    const updatedItem = cart.find((item) => item.id === id)

    if (updatedItem) {
      updatedItemCart({
        ...updatedItem,
        amountItem: updatedItem.amountItem === '' ? 0 : updatedItem.amountItem,
      })
    }
  }

  function incrementAmountItem() {
    const updatedItem = cart.find((item) => item.id === id)

    if (updatedItem) {
      updatedItemCart({
        ...updatedItem,
        amountItem:
          Number(updatedItem.amountItem) + 1 > 99
            ? 99
            : Number(updatedItem.amountItem) + 1,
      })
    }
  }

  function decrementAmountItem() {
    const updatedItem = cart.find((item) => item.id === id)

    if (updatedItem) {
      updatedItemCart({
        ...updatedItem,
        amountItem:
          Number(updatedItem.amountItem) - 1 <= 0
            ? 0
            : Number(updatedItem.amountItem) - 1,
      })
    }
  }

  return (
    <ContainerCard>
      <ImageNameAndButtons>
        <img src={imageCard} alt="" />
        <NameAndButtons>
          <NameContainer>{name}</NameContainer>
          <ButtonsContainer>
            <ButtonsPlusAndMinus>
              <button onClick={decrementAmountItem} className="buttonMinus">
                <Minus weight="bold" />
              </button>
              <input
                min={0}
                max={99}
                onFocus={handleFocus}
                onBlur={handleBlur}
                type="number"
                value={String(amountItem)}
                onChange={handleChange}
              />
              <button onClick={incrementAmountItem} className="buttonPlus">
                <Plus weight="bold" />
              </button>
            </ButtonsPlusAndMinus>
            <ButtonRemove onClick={handleRemoveItem}>
              <Trash />
              Remover
            </ButtonRemove>
          </ButtonsContainer>
        </NameAndButtons>
      </ImageNameAndButtons>
      <PriceContainer>R${valueCoffeeString}</PriceContainer>
    </ContainerCard>
  )
}
