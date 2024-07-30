import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  border-top-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;

  border-top-right-radius: 2.25rem;
  border-bottom-left-radius: 2.25rem;

  background: ${(props) => props.theme['white-300']};

  display: flex;
  flex-direction: column;

  > p {
    margin: 0 auto 0.5rem;

    color: ${(props) => props.theme['gray-700']};

    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
  }

  > span {
    margin: 0 auto;
    padding: 0 1.25rem;

    text-align: center;

    color: ${(props) => props.theme['gray-400']};

    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 130%;
  }

  > img {
    margin: -1.25rem 4.25rem 0.75rem;

    width: 7.5rem;
    height: 7.5rem;
  }
`

export const FooterCard = styled.div`
  margin-top: 2rem;
  padding: 0 1.25rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 130%;

    height: 2rem;

    color: ${(props) => props.theme['gray-600']};

    span {
      margin-left: 0.2rem;
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      line-height: 130%;
      font-weight: 800;
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${(props) => props.theme['purple-800']};

    width: 2.375rem;
    height: 2.375rem;

    border-radius: 6px;
    border: none;

    cursor: pointer;

    svg {
      width: 1.375rem;
      height: 1.375rem;

      color: ${(props) => props.theme['white-100']};
    }
  }
`

export const ButtonsPlusAndMinus = styled.div`
  display: flex;
  align-items: center;

  gap: 0.25rem;
  background: ${(props) => props.theme['white-500']};

  padding: 0.5rem;

  border-radius: 6px;
  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    background: transparent;
    border: none;

    cursor: pointer;
    svg {
      width: 0.875rem;
      height: 0.875rem;

      color: ${(props) => props.theme['purple-500']};
    }
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.25rem;
    height: 1.25rem;

    font-family: 'Roboto', sans-serif;
  }
`
