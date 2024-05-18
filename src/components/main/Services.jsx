import React from "react";

const Services = () => {
  const handleOrderService = (service) => {
    alert(`Вы заказали услугу: ${service}`);
  };

  return (
    <section id="services" className="services-main">
      <h2>Наши услуги</h2>
      <div className="service-list-main">
        <div className="service-item-main">
          <h3>Уборка жилых помещений</h3>
          <p>Поддерживайте ваш дом в чистоте с нашими тщательными услугами по уборке жилых помещений. 
             Наша команда профессионалов тщательно уберет каждую комнату, гарантируя, что ваш дом будет 
             сиять чистотой и уютом.</p>
          <button className="service-button" onClick={() => handleOrderService('Уборка жилых помещений')}>Заказать услугу</button>
        </div>
        <div className="service-item-main">
          <h3>Уборка офисов</h3>
          <p>Обеспечьте чистоту рабочего пространства с нашими профессиональными решениями по уборке офисов. 
             Чистый офис способствует продуктивной работе и положительному настроению сотрудников.</p>
          <button className="service-button" onClick={() => handleOrderService('Уборка офисов')}>Заказать услугу</button>
        </div>
        <div className="service-item-main">
          <h3>Генеральная уборка</h3>
          <p>Получите глубокую уборку, которая охватывает каждый уголок вашего помещения, оставляя его безупречно чистым и свежим. 
             Наша генеральная уборка идеально подходит для подготовки к важным событиям или после ремонта.</p>
          <button className="service-button" onClick={() => handleOrderService('Генеральная уборка')}>Заказать услугу</button>
        </div>
      </div>
    </section>
  );
};

export default Services;