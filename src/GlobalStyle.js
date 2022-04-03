import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@600&display=swap');

  :root {
    /* Colors */
    --orange: #FD5801;
    --purple: #5E01C9;
    --black: #272029;
    --blue: #3E0AF5;
    --white: #fff;
    --lightGray: #FAFAFA;
    --darkGray: #A9A6A9;
    --medGray: #7D797F;
    --todayColor: #b8d1e4;
    --arrowMonth: #FFAD65;
    --arrowMonthDisabled: #dcc3ac;
    /* Typography */
    --fontSuperBig: 2.5rem;
    --fontBig: 1.2rem;
    --fontMed: 0.9rem;
    --fontSmall: 0.75rem;
  }
  * {
    font-family: 'Lexend Deca', sans-serif;
    box-sizing: border-box;
  }

  body {
    background-color: var(--lightGray);
  }
`;

export default GlobalStyle;
