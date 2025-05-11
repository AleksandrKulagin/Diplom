import { Link } from "react-router-dom"

function LoginPage() {
    return (
        <>
            <head>
                <title>Авторизация</title>
            </head>
            <body className="login-page">
                <Link to="/" className="no-link-decoration">
                    <button className="back-to-client">
                        <img src="assets/images/Стрелка большая влево (черная).png" alt="" />
                        <span>Вернуться на сайт</span>
                    </button>
                </Link>
                <div className="forms">
                    <div className="info-form">
                        <div className="header-form-text">
                            <h1>Портал сотрудника</h1>
                        </div>
                        <div className="header-form-image">
                            <img
                                src="assets/images/Лого_сотрудник_черный_full 207x70px.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="form-auth">
                        <div className="form-auth-header">
                            <h1>Авторизация</h1>
                        </div>
                        <div className="form-auth-inputs">
                            <div className="login-input">
                                <p className="label-input">Логин</p>
                                <input type="text" placeholder="Ваш логин" required />
                            </div>
                            <div className="password-input">
                                <p className="label-input">Пароль</p>
                                <input type="password" placeholder="Ваш пароль" required />
                            </div>
                            <div className="remember-check">
                                <input type="checkbox" name="check1" id="" />
                                <p>Запомнить меня</p>
                            </div>
                            <div className="btn-login">
                                <button>Войти</button>
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
                    </div>
                </div>
            </body>
        </>
    )
}

export default LoginPage
