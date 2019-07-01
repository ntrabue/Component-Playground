import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "emotion-theming";

import theme from "./config/theme";
import Dashboard from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
