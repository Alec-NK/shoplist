import React from "react";
import { ThemeProvider } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";

import ShoppingList from "./pages/ShoppingList";
import { ListProvider } from "./context/ListContext";

import { DefaultTheme } from "./styles/theme";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <ChakraProvider>
      <ListProvider>
        <ThemeProvider theme={DefaultTheme}>
          <ShoppingList />
          <GlobalStyle />
        </ThemeProvider>
      </ListProvider>
    </ChakraProvider>
  );
}

export default App;
