import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./pages/styles/GlobalStyle";
// import GlobalFonts from "./assets/fonts/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <GlobalFonts /> */}
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
