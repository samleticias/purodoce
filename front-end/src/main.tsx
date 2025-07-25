import { ChakraProvider, Flex } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/footer";
import Header from "./components/header";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Router } from "./routes";
import { theme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ShoppingCartProvider>
        <BrowserRouter>
          <Flex bg="primary" justifyContent="center">
            <Header />
          </Flex>
          <Flex
            maxW={{
              base: "425px",
              md: "720px",
              lg: "1080px",
            }}
            overflow="auto"
            justifyContent="center"
            alignItems="center"
            pb="1rem"
            margin="0 auto"
            bg="backgroundColor"
          >
            <Router />
          </Flex>
        </BrowserRouter>
      </ShoppingCartProvider>
    </ChakraProvider>
  </React.StrictMode>
);
