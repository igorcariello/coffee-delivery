import {
  CardContainer,
  ButtonsPlusAndMinus,
  ButtonsContainer,
  FooterCard,
} from './styles'
import { Plus, Minus, ShoppingCartSimple } from '@phosphor-icons/react'

interface CardProps {
  imageCard: string
  name: string
  tagCoffee: []
  description: string
  valueCoffe: string
}

export function Card({ imageCard, name, description, valueCoffe }: CardProps) {
  return (
    <CardContainer>
      <img src={imageCard} alt="" />
      <p>{name}</p>
      <span>{description}</span>
      <FooterCard>
        <p>
          R$<span>{valueCoffe}</span>
        </p>
        <ButtonsContainer>
          <ButtonsPlusAndMinus>
            <button className="buttonMinus">
              <Minus weight="bold" />
            </button>
            <span>1</span>
            <button className="buttonPlus">
              <Plus weight="bold" />
            </button>
          </ButtonsPlusAndMinus>
          <button>
            <ShoppingCartSimple weight="fill" />
          </button>
        </ButtonsContainer>
      </FooterCard>
    </CardContainer>
  )
}
