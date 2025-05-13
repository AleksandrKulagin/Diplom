import { Link } from "react-router-dom"
import logoFooter from '/assets/images/Лого_клиент_футер_full 355x100px.png'

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-logo-block">
                    <img src={logoFooter} alt="" draggable="false" />
                </div>
                <div className="footer-menu-block">
                    <div className="footer-menu-block-left">
                        <ul>
                            <li><Link to='/services'>Услуги</Link></li>
                            <li><Link to='#'>Маркет</Link></li>
                            <li><Link to='/reviews'>Отзывы</Link></li>
                            <li><Link to='/about'>О нас</Link></li>
                            <li><Link to='#'>Акции и скидки</Link></li>
                            <li><Link to='#'>Вопросы и ответы</Link></li>
                        </ul>
                    </div>
                    <div className="footer-menu-block-right">
                        <div className="footer-menu-block-right-up">
                            <ul>
                                <li><Link to='#'>Карьера</Link></li>
                                <li><Link to='/login'>Для сотрудников</Link></li>
                            </ul>
                        </div>
                        <div className="footer-menu-block-right-down">
                            <ul>
                                <li><Link to="#">Политика конфиденциальности</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer