import { ButtonContainer } from './style'

interface PaymentMethodProps {
  imageSvg: React.ElementType
  nameMethod: string
  isSelected: boolean
  onClick: () => void
}

export function PaymentMethod({
  imageSvg: Icon,
  nameMethod,
  isSelected,
  onClick,
}: PaymentMethodProps) {
  return (
    <ButtonContainer type="button" isSelected={isSelected} onClick={onClick}>
      <Icon />
      <span>{nameMethod}</span>
    </ButtonContainer>
  )
}
