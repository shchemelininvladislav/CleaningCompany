import React from "react";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-content">
        <h1 className="header-title">CleanUp</h1>
        <nav>
          <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#services">Услуги</a></li>
            <li><a href="#about-us">О нас</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;