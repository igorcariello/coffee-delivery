import styled from 'styled-components'

export const TagContainer = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 6.25rem;

  font-family: 'Roboto', sans-serif;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;

  color: ${(props) => props.theme['yellow-800']};
  background: ${(props) => props.theme['yellow-100']};
`
