import React, { Fragment } from "react";
import { ThemeProvider } from "@material-ui/core";
import { ApolloProvider } from "@apollo/client";

// Own Dependencies
import Theme from "./theme";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AClient from "./config/apollo";

//CSS
import "./index.css";

function App() {
  return (
    <Fragment>
      <ApolloProvider client={AClient}>
        <ThemeProvider theme={Theme}>
          <Navbar />
          <Home />
        </ThemeProvider>
      </ApolloProvider>
    </Fragment>
  );
}

export default App;
