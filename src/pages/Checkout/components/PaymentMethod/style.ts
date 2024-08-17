import styled from 'styled-components'

interface ButtonContainerProps {
  $isSelected: boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  outline: 0;
  box-shadow: ${(props) =>
    props.$isSelected ? `0 0 0 2px ${props.theme['purple-500']}` : 0};

  width: 100%;
  height: 3.25rem;

  background: ${(props) =>
    props.$isSelected
      ? `${props.theme['purple-100']}`
      : `${props.theme['white-500']}`};

  border-radius: 6px;
  border: none;

  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  > svg {
    color: ${(props) => props.theme['purple-500']};
    width: 1rem;
    height: 1rem;
  }

  span {
    text-transform: uppercase;

    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    line-height: 160%;

    color: ${(props) => props.theme['gray-600']};
  }
`
