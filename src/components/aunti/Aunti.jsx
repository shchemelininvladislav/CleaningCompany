import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "../../css/aunti.css";

const Aunti = ({switchModeApp}) => {
  const [mode, setMode] = useState(0);

  const handleSwitchModeAunti = (newMode) => {
    setMode(newMode);
  };

  return (
    <div className="Aunti">
      <div className="content-container">
        <div className="form-container">
          {mode === 0 ? (
        <>
            <div className="info">
            </div>
            <div className="buttons-container">
              <button onClick={() => handleSwitchModeAunti(2)} className="btn-aunti">Вход</button>
              <button onClick={() => handleSwitchModeAunti(1)} className="btn-aunti">Регистрация</button>
            </div>
        </>
          ) : mode === 1 ? (
            <RegisterForm onBack={() => handleSwitchModeAunti(0)}/>
          ) : (
            <LoginForm onBack={() => handleSwitchModeAunti(0)} switchModeApp={switchModeApp}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Aunti;
