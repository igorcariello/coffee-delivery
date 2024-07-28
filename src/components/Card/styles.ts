import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  border-top-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;

  border-top-right-radius: 2.25rem;
  border-bottom-left-radius: 2.25rem;

  background: ${(props) => props.theme['gray-700']};
`
