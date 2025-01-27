import { createGlobalStyle } from "styled-components";
import { myTheme } from "./ThemeStyles.tsx";


export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${myTheme.colors.main};
        font-family: "Inter", sans-serif;
    }
`