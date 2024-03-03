import React from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { Main } from "./app_styles";
import { routes } from "./common/config/routes";
import { GlobalStyle } from "./theme/global_styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
        <RouterProvider router={routes} />
      </Main>
    </ThemeProvider>
  );
}

export default App;
