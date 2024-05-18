import React, { useState } from "react";
import InfoAunti from "./components/aunti/InfoAunti";
import Aunti from "./components/aunti/Aunti";
import Main from "./components/main/Main";
import "./css/app.css";

const App = () => {
    const [mode, setMode] = useState(0);

    const handleSwitchModeApp = (newMode) => {
        setMode(newMode);
    };

    return (
        <div className="App">
            {mode === 0 ? (
                <InfoAunti switchModeApp={handleSwitchModeApp}/>
            ) : mode === 1 ? (
                <Aunti switchModeApp={handleSwitchModeApp}/>
            ) : mode === 2  ? (
                <Main/>
          ) : (
            <div>Unknown Mode</div>
        )}
        </div>
    );
};

export default App;
