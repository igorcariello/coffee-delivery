import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

/*:focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }
*/

  body {
    background: ${(props) => props.theme['white-200']};
    color: ${(props) => props.theme['gray-800']};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button{
    font-family: "Baloo 2", sans-serif;
    font-weight: 400;
    line-height: 130%;
    font-size: 1rem;
 }
`
