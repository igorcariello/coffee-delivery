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
import expressoTradicional from '../../../../assets/coffesImages/expressoTradicional.svg'

export function CardSelectedCoffees() {
  const imageExpressoTradicional = expressoTradicional

  return (
    <ContainerCard>
      <ImageNameAndButtons>
        <img src={imageExpressoTradicional} alt="" />
        <NameAndButtons>
          <NameContainer>Expresso Tradicional</NameContainer>
          <ButtonsContainer>
            <ButtonsPlusAndMinus>
              <button className="buttonMinus">
                <Minus weight="bold" />
              </button>
              <input min={0} max={9} type="number" placeholder="0" />
              <button className="buttonPlus">
                <Plus weight="bold" />
              </button>
            </ButtonsPlusAndMinus>
            <ButtonRemove>
              <Trash />
              Remover
            </ButtonRemove>
          </ButtonsContainer>
        </NameAndButtons>
      </ImageNameAndButtons>
      <PriceContainer>R$9,90</PriceContainer>
    </ContainerCard>
  )
}
