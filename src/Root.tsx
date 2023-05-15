import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ToDoList from "./components/ToDoList";
import FixToDoList from "./components/FixToDoList";

function Root() {
  return (
    <>
      <GlobalStyle />
      <HelmetProvider>
        <Helmet>
          <title>title</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap"
            rel="stylesheet"
          ></link>
        </Helmet>
      </HelmetProvider>
      <h1>Root</h1>
      {/* <ToDoList /> */}
      <FixToDoList />
    </>
  );
}

export default Root;
