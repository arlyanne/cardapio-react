import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./assets/components/Header/index.tsx";


createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ChakraProvider>
      <StrictMode>
        <Header/>
        <App />
      </StrictMode>,
    </ChakraProvider>
  </BrowserRouter>
);
