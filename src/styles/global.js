import { createGlobalStyle } from 'styled-components';

import colors from './colors';

import background from '../assets/background.jpg';

export default createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap'); */

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
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

  body, input, button {
    color: ${colors.dark};
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  #root {
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
