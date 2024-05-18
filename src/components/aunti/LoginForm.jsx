import React, { useState } from "react";

const LoginForm = ({ onBack, switchModeApp }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedLogin = localStorage.getItem("login");
    const storedPassword = localStorage.getItem("password");

    if (login === storedLogin && password === storedPassword) {
      alert("Успешный вход");
      switchModeApp(2);
    } else {
      alert("Проверьте введенные данные");
    }
  };

  return (
    <div className="loginform">
      <form className="form">
        <div className="form-group">
          <input 
            type="text" 
            id="login" 
            value={login} 
            onChange={(e) => setLogin(e.target.value)} 
            className="form-control"
            placeholder="логин"
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="form-control" 
            placeholder="пароль"
          />
        </div>
        <div className="password-repeat">
        </div>
        <div className="form-group forgot-password">
          <a href="#" className="forgot-password">Забыли пароль?</a>
        </div>
        <div className="button-group">
          <button type="button" onClick={handleLogin} className="btn btn-primary next-button">Вход</button>
          <button type="button" onClick={onBack} className="btn btn-primary back-button">Назад</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
