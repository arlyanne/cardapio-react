import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import RouteApp from "./routes/index.tsx";
import Header from "./components/Header/index.tsx";


createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ChakraProvider>
      <StrictMode>
        <Header/>
        <RouteApp/>
      </StrictMode>,
    </ChakraProvider>
  </BrowserRouter>
);
