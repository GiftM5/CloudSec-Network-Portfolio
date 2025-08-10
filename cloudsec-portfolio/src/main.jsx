import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";

// Optional: customize colors for dark mode
const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      500: "#00ffcc",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </>
);
