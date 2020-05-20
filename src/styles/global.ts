import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`

  /* Resetando valores defaults */
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
    --webkit-font-smoothing: antialiased; /* Funciona somente no Chrome */
  }

  body, input, button {
    font: 16px Roboto, sans-serif
  }

  #root {
    max-width: 960px; /* Seta largura maxima da aplicacao, centraliza tudo em 960px; */
    margin: 0 auto; /* centraliza */
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
