import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@normal&display=swap');

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
    font-weight: normal;
  }

  body {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2000' height='2000' preserveAspectRatio='none' viewBox='0 0 2000 2000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1092%26quot%3b)' fill='none'%3e%3crect width='2000' height='2000' x='0' y='0' fill='rgba(93%2c 183%2c 229%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c767.832C138.859%2c740.682%2c245.744%2c643.996%2c362.684%2c564.348C476.234%2c487.009%2c589.659%2c415.978%2c674.849%2c308.193C780.225%2c174.869%2c905.367%2c38.607%2c912.417%2c-131.186C919.842%2c-310.003%2c829.953%2c-482.348%2c713.309%2c-618.086C596.397%2c-754.135%2c439.451%2c-870.171%2c261.076%2c-889.142C91.212%2c-907.208%2c-45.517%2c-761.229%2c-210.33%2c-716.319C-379.866%2c-670.122%2c-584.129%2c-735.915%2c-718.177%2c-622.304C-854.668%2c-506.623%2c-905.698%2c-308.637%2c-902.419%2c-129.748C-899.345%2c37.925%2c-776.922%2c170.611%2c-700.901%2c320.091C-628.569%2c462.318%2c-601.396%2c640.655%2c-466.928%2c726.554C-332.53%2c812.409%2c-156.516%2c798.434%2c0%2c767.832' fill='%231f89c0'%3e%3c/path%3e%3cpath d='M2000 2786.821C2147.748 2789.665 2275.661 2701.587 2405.309 2630.673 2544.583 2554.493 2694.936 2489.4610000000002 2783.951 2358.0190000000002 2881.194 2214.428 2978.265 2031.517 2922.21 1867.406 2865.552 1701.529 2624.608 1690.7060000000001 2510.555 1557.601 2395.459 1423.278 2426.415 1170.577 2264.361 1099.6680000000001 2106.224 1030.473 1933.811 1166.8310000000001 1775.683 1236.048 1635.873 1297.2469999999998 1510.279 1374.905 1398.408 1478.7179999999998 1274.6970000000001 1593.519 1105.978 1701.319 1092.967 1869.588 1079.931 2038.171 1238.94 2164.454 1334.603 2303.877 1413.934 2419.497 1491.117 2532.8959999999997 1604.597 2615.259 1723.276 2701.3959999999997 1853.384 2783.999 2000 2786.821' fill='%23b3ddf3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1092'%3e%3crect width='2000' height='2000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  }
`;

export default GlobalStyle;
