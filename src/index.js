import React from "react";
import ReactDOM from "react-dom";
import "animate.css";
import { StateFooter } from "./stateFooter";
import Form from "./form";
import Footer from "./footer";
import "../src/styles.css";

function App() {
  return (
    <React.Fragment>
      <Form />
      <Footer BgColor={StateFooter.BgColor} Social={StateFooter.Redes} />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
