import React from "react";
import "../../css/infoaunti.css";

const InfoAunti = ({ switchModeApp }) => {
    return (
        <div className="info-aunti">
            <header className="header">
                <div className="header-content">
                    <h1>Добро пожаловать в CleanUp</h1>
                    <p>Ваш надежный партнер в создании чистоты</p>
                </div>
            </header>
            <section className="services">
                <h2 className="services-title">Наши услуги</h2>
                <div className="service-list">
                    <div className="service-item service-residential">
                        <h3>Уборка жилых помещений</h3>
                        <p>Поддерживайте ваш дом в чистоте с нашими тщательными услугами по уборке жилых помещений.</p>
                    </div>
                    <div className="service-item service-office">
                        <h3>Уборка офисов</h3>
                        <p>Обеспечьте чистоту рабочего пространства с нашими профессиональными решениями по уборке офисов.</p>
                    </div>
                    <div className="service-item service-general">
                        <h3>Генеральная уборка</h3>
                        <p>Получите глубокую уборку, которая охватывает каждый уголок вашего помещения, оставляя его безупречно чистым и свежим.</p>
                    </div>
                </div>
            </section>
            <section className="about-us">
                <h2 className="about-title">О нас</h2>
                <p className="about-description">
                    В CleanUp мы гордимся предоставлением услуг клининга самого высокого качества. 
                    Наша команда опытных профессионалов стремится к тому, чтобы каждый клиент остался доволен 
                    результатом. Независимо от того, это ваш дом, офис или любое другое помещение, мы обладаем 
                    необходимыми знаниями и опытом, чтобы сделать его сияющим.
                </p>
            </section>
            <section className="contact">
                <h2 className="contact-title">Свяжитесь с нами</h2>
                <p className="contact-description">
                    Готовы испытать разницу с CleanUp? Свяжитесь с нами сегодня, чтобы назначить следующее 
                    время уборки.
                </p>
                <button onClick={() => switchModeApp(1)} className="contact-button">Воспользоваться услугой</button>
            </section>
        </div>
    );
};

export default InfoAunti;
