import styled from 'styled-components'

export const HomeContainer = styled.div``

export const BannerContainer = styled.div`
  min-height: 32rem;
  padding: 5.75rem 10rem;

  display: flex;
  gap: 3.5rem;

  background: blue;
`

export const TextContainer = styled.div`
  background: lightblue;

  > h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    line-height: 130%;

    color: ${(props) => props.theme['gray-800']};
  }

  > p {
    color: ${(props) => props.theme['gray-700']};

    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const ImageContainer = styled.div`
  background: lightgreen;

  width: 29.75rem;
  height: 22.5rem;
`

export const CharacteristicsContainer = styled.div``
