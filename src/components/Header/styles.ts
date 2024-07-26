import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 5.25rem;
    height: 2.5rem;
  }

  nav {
    display: flex;
    gap: 0.75rem;
  }

  .locale {
    padding: 0.5rem;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    font-family: 'Roboto';
    font-size: 0.875rem;
    line-height: 130%;

    background: ${(props) => props.theme['purple-100']};
    color: ${(props) => props.theme['purple-800']};

    > svg {
      width: 1.375rem;
      height: 1.375rem;
      color: ${(props) => props.theme['purple-500']};
    }
  }

  .shoppingCart {
    background: ${(props) => props.theme['yellow-100']};

    border: none;
    padding: 0.5rem;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    cursor: pointer;

    > svg {
      width: 1.375rem;
      height: 1.375rem;
      color: ${(props) => props.theme['yellow-800']};
    }

    > span {
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;

      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 0.75rem;
      letter-spacing: -0.72px;

      color: ${(props) => props.theme['white-100']};
      background: ${(props) => props.theme['yellow-800']};
    }
  }
`
