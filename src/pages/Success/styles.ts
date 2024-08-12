import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin: 5rem 10rem;
  display: flex;
  justify-content: space-between;
  gap: 6.375rem;

  > img {
    svg {
      max-width: 30.75rem;
      max-height: 18.3125rem;
    }
  }
`

export const MainContainer = styled.div`
  width: 100%;

  > h2 {
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;

    margin-bottom: 0.25rem;

    color: ${(props) => props.theme['yellow-800']};
  }

  > p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['gray-700']};

    margin-bottom: 2.5rem;
  }
`

export const OrderContainer = styled.div`
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  position: relative;
  z-index: 1;

  border-radius: 0.375rem 2.25rem;
  padding: 2.5rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    border-radius: 0.375rem 2.25rem;
    padding: 1px;

    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;

    background: linear-gradient(to right, #dbac2c, #8047f8);
    z-index: -1;
  }
`

export const AddressContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;

  > span {
    width: 2rem;
    height: 2rem;

    border-radius: 100%;
    padding: 0.5rem;

    color: ${(props) => props.theme['white-100']};
    background: ${(props) => props.theme['purple-500']};

    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`

export const Address = styled.div`
  > p {
    font-family: 'Roboto', sans-serif;
    line-height: 130%;

    color: ${(props) => props.theme['gray-600']};

    span {
      font-weight: 700;
    }
  }
`

export const ForecastContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;

  > span {
    width: 2rem;
    height: 2rem;

    border-radius: 100%;
    padding: 0.5rem;

    color: ${(props) => props.theme['white-100']};
    background: ${(props) => props.theme['yellow-500']};

    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`

export const Forecast = styled.div`
  > p {
    font-family: 'Roboto', sans-serif;
    line-height: 130%;

    color: ${(props) => props.theme['gray-600']};
  }

  > span {
    font-family: 'Roboto', sans-serif;
    line-height: 130%;

    color: ${(props) => props.theme['gray-600']};

    font-weight: 700;
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;

  > span {
    width: 2rem;
    height: 2rem;

    border-radius: 100%;
    padding: 0.5rem;

    color: ${(props) => props.theme['white-100']};
    background: ${(props) => props.theme['yellow-800']};

    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`

export const Payment = styled.div`
  > p {
    font-family: 'Roboto', sans-serif;
    line-height: 130%;

    color: ${(props) => props.theme['gray-600']};
  }

  > span {
    font-family: 'Roboto', sans-serif;
    line-height: 130%;

    color: ${(props) => props.theme['gray-600']};

    font-weight: 700;
  }
`
