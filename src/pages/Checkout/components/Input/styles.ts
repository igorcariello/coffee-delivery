import styled from 'styled-components'

interface InputContainerProps {
  widthInput: string
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  position: relative;
  flex-grow: ${({ widthInput }) => (widthInput === '100%' ? 1 : 0)};

  > input {
    padding: 0.75rem;

    height: 2.625rem;

    border-radius: 4px;
    border: 1px solid ${(props) => props.theme['white-500']};
    background: ${(props) => props.theme['white-400']};

    color: ${(props) => props.theme['gray-600']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 130%;
  }

  ::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme['gray-400']};
  }
`
