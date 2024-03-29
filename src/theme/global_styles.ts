import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} 

body{
    font-family: "Inter", sans-serif;
    background: ${theme.colors.primary};
    padding: 0;
    margin: 0;
}
`;
