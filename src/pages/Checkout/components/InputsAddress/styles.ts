import styled from 'styled-components'

export const FormAddressContainer = styled.div`
  padding: 0 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FirstLine = styled.div``

export const CepInput = styled.input`
  position: relative;

  padding: 0.75rem;

  height: 2.625rem;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['white-500']};
  background: ${(props) => props.theme['white-400']};

  color: ${(props) => props.theme['gray-600']};
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  line-height: 130%;

  ::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme['gray-400']};
  }

  > p {
    display: flex;
    position: absolute;
    right: 0.75rem;
    top: 0.8125rem;

    font-family: 'Roboto', sans-serif;
    font-style: italic;
    line-height: 130%;
    font-size: 0.75rem;

    color: ${(props) => props.theme['gray-400']};
  }
`

export const SecondLine = styled.div``

export const StreetInput = styled(CepInput)`
  width: 100%;
`

export const ThirdLine = styled.div`
  display: flex;

  gap: 0.75rem;
`

export const NumberInput = styled(CepInput)`
  width: 12.5rem;
`

interface ComplementInputProps {
  optional?: string
}

export const ComplementWrapper = styled.div`
  display: flex;
  position: relative;

  width: 100%;
  > p {
    display: flex;
    position: absolute;
    right: 0.75rem;
    top: 0.8125rem;

    font-family: 'Roboto', sans-serif;
    font-style: italic;
    line-height: 130%;
    font-size: 0.75rem;

    color: ${(props) => props.theme['gray-400']};
  }
`

export const ComplementInput = styled(CepInput)<ComplementInputProps>`
  width: 100%;
`

export const FourthLine = styled.div`
  display: flex;
  gap: 0.75rem;
`
export const NeighborhoodInput = styled(CepInput)`
  width: 15rem;
`

export const CityInput = styled(CepInput)`
  width: 100%;
`

export const StateInput = styled(CepInput)`
  width: 5rem;
`
