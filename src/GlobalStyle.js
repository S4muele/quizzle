import { createGlobalStyle } from "styled-components";

// 1440

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Karla', sans-serif;
        font-size: 15px;
        scroll-behavior: smooth;
        
        @media(min-width: 375px) {
            font-size: 19px;
        }
        @media(min-width: 720px) {
            font-size: 22px;
        }
    }    
    
    body {
        position: relative;
        min-height: 100vh;
        max-width: 1800px;
        z-index: 99;
        margin: 0 auto;
        color: #FFFFFF;
        background-color: ${({theme}) => theme === "light" ? "#6B73F0" : "#1B1B1B"};

        .blob-top {
            z-index: -9;
            position: absolute;
            width: 14.8rem;
            height: 11.73rem;
            top: 0;
            right: 0;
            opacity: ${({theme}) => theme === "light" ? 1 : .3};

        }
        .blob-bottom {
            z-index: -9;
            position: absolute;
            width: 17.4rem;
            height: 12.66rem;
            bottom: 0;
            left: 0;
            opacity: ${({theme}) => theme === "light" ? 1 : .3};

        }
        
    }
`