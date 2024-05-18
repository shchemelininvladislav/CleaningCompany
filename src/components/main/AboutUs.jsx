import React from "react";

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us-main">
      <h2>О нас</h2>
      <div className="about-us-content-main">
        <div className="about-us-text-main">
          <p>В CleanUp мы гордимся предоставлением услуг клининга самого высокого качества. 
             Наша команда опытных профессионалов стремится к тому, чтобы каждый клиент остался доволен 
             результатом. Независимо от того, это ваш дом, офис или любое другое помещение, мы обладаем 
             необходимыми знаниями и опытом, чтобы сделать его сияющим.</p>
             <br></br>
          <h3>Наши преимущества</h3>
          <ul>
            <li>Квалифицированные специалисты</li>
            <li>Использование экологически чистых средств</li>
            <li>Индивидуальный подход к каждому клиенту</li>
            <li>Гарантия качества и прозрачные цены</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;