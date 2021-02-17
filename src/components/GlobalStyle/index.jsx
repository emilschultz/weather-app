import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 20px;
    line-height: 1.5;
  }
  body {
    font-family: Helvetica, sans-serif;
  }

  main {
    min-height: 100vh;
  }

  

   
`;

export default GlobalStyle;