import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "../src/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { store } from "../src/redux/store";
import { Provider } from "react-redux";

const theme = {
  colors: {
    mainColor: "#3470ff",
    hoverColor: "#0b44cd",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter basename="/AutoMarket">
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
