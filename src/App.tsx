import React from "react";
import { ThemeProvider } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";

import ShoppingList from "./pages/ShoppingList";

import { DefaultTheme } from "./styles/theme";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <ChakraProvider>
      <ThemeProvider theme={DefaultTheme}>
        <ShoppingList />
        <GlobalStyle />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
