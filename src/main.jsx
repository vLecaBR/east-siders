import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
