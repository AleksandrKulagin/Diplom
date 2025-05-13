import { Link, useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { useState } from "react"
import backArrow from '/assets/images/Стрелка большая влево (черная).png'
import logoEmployee from '/assets/images/Лого_сотрудник_черный_full 207x70px.png'

function LoginPage() {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Reset errors
        setLoginError(false);
        setPasswordError(false);
        
        // Validate fields
        let hasError = false;
        
        if (!login || login.trim() === '') {
            setLoginError(true);
            hasError = true;
        }
        
        if (!password || password.trim() === '') {
            setPasswordError(true);
            hasError = true;
        }

        if (hasError) {
            return;
        }

        // If validation passes, proceed with login
        setTimeout(() => {
            navigate('/portal/main');
        }, 1000);
    };

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
        if (e.target.value.trim() !== '') {
            setLoginError(false);
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (e.target.value.trim() !== '') {
            setPasswordError(false);
        }
    };

    return (
        <>
            <Helmet title="Авторизация" />
            <div className="login-page">
                <div className="login-page-forms">
                    <Link to="/" className="no-link-decoration">
                    <button className="back-to-client">
                        <img src={backArrow} alt="" />
                        <span>Вернуться на сайт</span>
                    </button>
                </Link>
                    <div className="info-form">
                        <div className="header-form-text">
                            <h1>Портал сотрудника</h1>
                        </div>
                        <div className="header-form-image">
                            <img
                                src={logoEmployee}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="form-auth">
                        <div className="form-auth-header">
                            <h1>Авторизация</h1>
                        </div>
                        <form onSubmit={handleLogin} noValidate>
                            <div className="form-auth-inputs">
                                <div className="login-input">
                                    <p className="label-input">Логин</p>
                                    <input 
                                        type="text" 
                                        placeholder="Ваш логин" 
                                        value={login}
                                        onChange={handleLoginChange}
                                        className={loginError ? 'error-input' : ''}
                                    />
                                </div>
                                <div className="password-input">
                                    <p className="label-input">Пароль</p>
                                    <input 
                                        type="password" 
                                        placeholder="Ваш пароль" 
                                        value={password}
                                        onChange={handlePasswordChange}
                                        className={passwordError ? 'error-input' : ''}
                                    />
                                </div>
                                <div className="remember-check">
                                    <input 
                                        type="checkbox" 
                                        name="check1" 
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                    />
                                    <p>Запомнить меня</p>
                                </div>
                                <div className="btn-login">
                                    <button type="submit">Войти</button>
                                </div>
                                <div className="repair-pass">
                                    <p>
                                        Забыли пароль?
                                        <Link to='mailto:Aleksandr.kulagin.99@yandex.ru&body=Фамилия Имя?subject=Восстановление пароля'>
                                            {" "}
                                            Восстановить
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
