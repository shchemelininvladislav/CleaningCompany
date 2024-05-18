import React, { useState } from "react";

const RegisterForm = ({ onBack }) => { 
    const [formData, setFormData] = useState({
        login: "",
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreed: false,
    });
    const [errors, setErrors] = useState({});

    // Сохранение данных в formData
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    //Валидация введенных данных
    const validateForm = () => {
        const newErrors = {};
        const storedLogin = localStorage.getItem("login");

        if (formData.login === "" || formData.login === storedLogin) {
            newErrors.login = "Логин должен быть уникальным и не пустым";
        }
        if (formData.name.length <= 2) {
            newErrors.name = "Имя должно быть более 2 букв";
        }
        if (!/^\d{7,}$/.test(formData.phone)) {
            newErrors.phone = "Мобильный телефон должен содержать не менее 7 цифр";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Введите корректный email";
        }
        if (formData.password.length < 6) {
            newErrors.password = "Пароль должен быть не менее 6 знаков";
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Пароли должны совпадать";
        }
        if (!formData.agreed) {
            newErrors.agreed = "Вы должны согласиться с условиями";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    //Сохраннение данных в локальное хранилище
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            localStorage.setItem("login", formData.login);
            localStorage.setItem("password", formData.password);

            console.log("Form submitted:", formData);
            alert("Спасибо за регистрацию! Ваша учетная запись успешно создана. На ваш e-mail было отправлено письмо с вашими данными");
            onBack(1)
            
        }
    };

    return (
        <div className="registerForm">
            <form className="form" >
                <div className="form-group">
                    <input 
                        type="text" 
                        id="login" 
                        name="login" 
                        value={formData.login} 
                        onChange={handleChange} 
                        className="form-control" 
                        placeholder="логин"
                    />
                    {errors.login && <span className="error">{errors.login}</span>}
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        className="form-control" 
                        placeholder="ваше имя"
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="form-control" 
                        placeholder="номер телефона"
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="form-control" 
                        placeholder="email"
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        className="form-control" 
                        placeholder="пароль"
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        value={formData.confirmPassword} 
                        onChange={handleChange} 
                        className="form-control" 
                        placeholder="повторите пароль"
                    />
                    {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                </div>
                <div className="form-group check">
                    <input 
                        type="checkbox" 
                        id="agreed" 
                        name="agreed" 
                        checked={formData.agreed} 
                        onChange={handleChange} 
                        required 
                    />
                    <label htmlFor="agreed">Я согласен с условиями публичной оферты</label>
                    {errors.agreed && <span className="error">{errors.agreed}</span>}
                </div>
                <div className="button-group">
                    <button type="button" onClick={handleSubmit} className="btn btn-primary">Зарегистрироваться</button>
                    <button type="button" onClick={onBack} className="btn btn-primary back-button">Назад</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
