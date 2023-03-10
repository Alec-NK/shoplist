import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    button {
        cursor: pointer;
    }
`;
