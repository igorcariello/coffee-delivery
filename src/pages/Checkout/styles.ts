import styled from 'styled-components'

export const FormContainer = styled.form`
  padding: 2.5rem 10rem 15rem;

  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
`
export const AddressAndPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  > h2 {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;

    color: ${(props) => props.theme['gray-700']};
  }
`

export const AddressContainer = styled.div`
  background: ${(props) => props.theme['white-300']};
  margin-top: 0.9375rem;
  margin-bottom: 0.75rem;

  border-radius: 6px;
`

export const HeaderAddress = styled.header`
  padding: 2.5rem 2.5rem 2rem;

  display: flex;
  gap: 0.5rem;

  > svg {
    width: 1.375rem;
    height: 1.375rem;

    color: ${(props) => props.theme['yellow-800']};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    p {
      font-family: 'Roboto', sans-serif;
      line-height: 130%;

      color: ${(props) => props.theme['gray-700']};
    }

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      line-height: 130%;

      color: ${(props) => props.theme['gray-600']};
    }
  }
`

export const PaymentContainer = styled.div`
  background: ${(props) => props.theme['white-300']};

  border-radius: 6px;
`

export const HeaderPayment = styled(HeaderAddress)`
  > svg {
    color: ${(props) => props.theme['purple-500']};
  }
`
export const PaymentMethods = styled.div`
  padding: 0 2.5rem 2.5rem 2.5rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
`

export const SelectedCoffeesContainer = styled.div`
  > h2 {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;

    margin-bottom: 0.9375rem;

    color: ${(props) => props.theme['gray-700']};
  }
`

export const MainSelectedCoffees = styled.div`
  padding: 2.5rem;

  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;

  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;

  background-color: ${(props) => props.theme['white-300']};
`
export const DivisorCard = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;

  width: 100%;
  border: 0.5px solid ${(props) => props.theme['white-500']};
`

export const CalculationContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-direction: column;
`

export const TotalItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['gray-600']};

  > span {
    font-size: 1rem;
  }
`

export const Delivery = styled(TotalItems)``

export const Total = styled(TotalItems)`
  font-size: 1.25rem;
  font-weight: 700;

  color: ${(props) => props.theme['gray-700']};
`
export const ButtonConfirm = styled.button`
  margin-top: 2rem;
  width: 100%;
  padding: 0.75rem 0.5rem;

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;

  border: none;
  border-radius: 6px;

  text-transform: uppercase;

  color: ${(props) => props.theme['white-100']};
  background-color: ${(props) => props.theme['yellow-500']};
`
