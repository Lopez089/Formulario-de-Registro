import React from "react";
import ReactDOM from "react-dom";
import "animate.css";
import StateFooter from "./components/footer/stateFooter";
import Form from "./components/form.jsx";
import Footer from "./components/footer/footer.jsx";
import "./styles.css";

function App() {
    return (
        <>
            <Form />
            <Footer BgColor={StateFooter.BgColor} Social={StateFooter.Redes} />
        </>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
