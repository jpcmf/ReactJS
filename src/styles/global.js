import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background-color: ${colors.white};
  }

  body, input, button {
    color: ${colors.dark};
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
