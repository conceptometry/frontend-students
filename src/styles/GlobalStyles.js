import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, body{
        margin: 0;
        padding: 0;
        font-family: 'Poppins';
        font-weight: 400
    }

    h1 {
        font-size: 32px;
    }

    h2 {
        font-size: 26px;
    }

    h3 {
        font-size: 22px;
    }
    h4 {
        font-size: 18px;
    }
    h5 {
        font-size: 15px;
    }
    h6 {
        font-size: 12px;
    }
`;
