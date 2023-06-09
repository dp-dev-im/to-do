import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  </RecoilRoot>
  // </React.StrictMode>
);
