import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html {
        font-size: 62.5%;
    }

    body {
        // padding-left: 150px;
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
        background: hsl(49,100%,58%); //temporary
    }
    #root {
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyles;
