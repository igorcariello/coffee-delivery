import styled from 'styled-components'

export const HomeContainer = styled.div``

export const BannerContainer = styled.div`
  min-height: 32rem;
  padding: 5.75rem 10rem;

  display: flex;
  gap: 3.5rem;
`

export const TextContainer = styled.div`
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
  max-width: 29.75rem;
  max-height: 22.5rem;

  > img {
    max-width: 29.75rem;
    max-height: 22.5rem;
  }
`

export const CharacteristicsContainer = styled.div`
  margin-top: 4rem;

  display: flex;
  gap: 2.5rem;

  .darkYellow {
    background: ${(props) => props.theme['yellow-800']};
  }

  .yellow {
    background: ${(props) => props.theme['yellow-500']};
  }

  .purple {
    background: ${(props) => props.theme['purple-500']};
  }

  .gray {
    background: ${(props) => props.theme['gray-600']};
  }

  > div {
    ul {
      height: 5.25rem;

      display: flex;
      flex-direction: column;
      gap: 1.25rem;

      li {
        list-style-type: none;

        font-family: 'Roboto', sans-serif;
        line-height: 130%;
        color: ${(props) => props.theme['gray-600']};

        font-weight: 400;

        display: flex;
        align-items: center;
        gap: 0.75rem;

        height: 2rem;

        span {
          width: 2rem;
          height: 2rem;

          display: flex;

          padding: 0.5rem;
          border-radius: 50%;

          color: ${(props) => props.theme['white-100']};
        }
      }
    }
  }
`

export const MainContainer = styled.main`
  padding: 2rem 10rem 9.5rem 10rem;

  width: 100vw;

  > h2 {
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    font-family: 'Baloo 2', sans-serif;
    margin-bottom: 3.375rem;
  }
`

export const CoffeesContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  flex-wrap: wrap;
`
