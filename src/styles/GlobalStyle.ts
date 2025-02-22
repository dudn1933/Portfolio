import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './fonts.css';

const GlobalStyle = createGlobalStyle`
    ${reset}

    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        font-family: 'Pretendard', sans-serif;

        min-width: 1270px;
    }

    button {
        font-family: 'Pretendard', sans-serif;
    }

    /* * {
        cursor: none !important;
        user-select: none;
    } */

    #root {
        width: 100%;
        height: 100%;

        color: #f78fcc;
    }

    #content-scroll {
        overflow-y: scroll;
  
        ::-webkit-scrollbar {
            display: none;
        }
        
        -ms-overflow-style: none; 
        scrollbar-width: none; 
    }
`;

export default GlobalStyle;
