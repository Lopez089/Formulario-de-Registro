// import "./wdyr";
import whyDidYouRender from "@welldone-software/why-did-you-render";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import "animate.css";
import "./styles.css";

whyDidYouRender(React, {
    onlyLogs: true,
    titleColor: "green",
    diffNameColor: "aqua",
});

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    rootElement,
);
