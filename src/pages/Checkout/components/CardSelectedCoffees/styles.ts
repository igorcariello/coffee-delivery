import styled from 'styled-components'

export const ContainerCard = styled.div`
  padding: 0.25rem 0.5rem;
  width: 23rem;

  display: flex;
  justify-content: space-between;
`
export const ImageNameAndButtons = styled.div`
  display: flex;
  gap: 1.25rem;

  > img {
    width: 4rem;
    height: 4rem;
  }
`

export const NameAndButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const NameContainer = styled.strong`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 130%;

  color: ${(props) => props.theme['gray-700']};
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ButtonRemove = styled.button`
  display: flex;
  gap: 0.25rem;

  align-items: center;

  padding-left: 0.5rem;
  padding-right: 0.5rem;

  border: none;
  border-radius: 6px;

  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  line-height: 160%;

  text-transform: uppercase;

  cursor: pointer;

  color: ${(props) => props.theme['gray-600']};

  background-color: ${(props) => props.theme['white-500']};

  > svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const PriceContainer = styled.strong`
  color: ${(props) => props.theme['gray-600']};

  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  line-height: 130%;
`
