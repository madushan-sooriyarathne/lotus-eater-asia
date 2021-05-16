import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

const GlobalStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`

    

    *, *::before, *::after {
        margin: 0;
        border: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        font-family: ${(props) => props.theme.fonts.primary};
        font-weight: 400;
        letter-spacing: 0.5px;
        color: ${(props) => props.theme.colors.black};
        scroll-behavior: smooth;
        box-sizing: border-box;

        // TODO: REmove this
        @media only screen and (max-width: 1300px) {
            font-size: 50%;
        }

        
       
    }

    body {
        min-height: 100vh;
        width: 100vw;
        overflow-y: auto;
        overflow-x: hidden;
        
    }

    p {
        font-size: 1.5rem;
        text-align: center;
        /* color */
    }

    // TODO: Add Scroll Bar styles
`;

export default GlobalStyles;
