import React from "react";
import StateFooter from "./components/footer/stateFooter";
import Form from "./components/form.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
    return (
        <>
            <div className="d-flex align-items-center flex-column">
                <Form />
            </div>
            <Footer BgColor={StateFooter.BgColor} Social={StateFooter.Redes} />
        </>
    );
}

export default App;
