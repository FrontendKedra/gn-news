import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        word-break: break-word;
        background: #F5F5FA;
        font-family: 'Poppins', sans-serif; 
    }
`;
