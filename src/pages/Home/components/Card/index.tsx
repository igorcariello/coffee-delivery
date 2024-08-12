import {
  CardContainer,
  ButtonsPlusAndMinus,
  ButtonsContainer,
  FooterCard,
  TagContainer,
} from './styles'
import { Plus, Minus, ShoppingCartSimple } from '@phosphor-icons/react'
import { Tag } from '../Tag'

interface CardProps {
  imageCard: string
  name: string
  tagCoffee: string[]
  description: string
  valueCoffe: string
}

export function Card({
  tagCoffee,
  imageCard,
  name,
  description,
  valueCoffe,
}: CardProps) {
  return (
    <CardContainer>
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
