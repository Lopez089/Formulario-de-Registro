import React from "react";
import ReactDOM from "react-dom";
import "animate.css";
import { StateFooter } from "./components/footer/stateFooter";
import Form from "./components/form";
import Footer from "./components/footer/footer";
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
