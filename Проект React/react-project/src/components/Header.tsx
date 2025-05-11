import { Link } from "react-router-dom"
import { useState } from "react"
import { useLocation } from "./LocationContext"
import ChooseCityFilial from "./ChooseCityFilial"

function Header() {
    const { selectedCity, selectedFilial } = useLocation();
    const [showCityModal, setShowCityModal] = useState(false);
    const [modalType, setModalType] = useState<'city' | 'filial'>('city');

    const handleCityClick = () => {
        setModalType('city');
        setShowCityModal(true);
    };

    const handleFilialClick = () => {
        setModalType('filial');
        setShowCityModal(true);
    };

    const handleModalClose = () => {
        setShowCityModal(false);
    };

    return (
        <>
        <header className="header">
            {/*Черная полоса*/}
            <div className="black-strip">
                <div className="blocks-center">
                    <div className="menu-city">
                        {/*Выбор города и филиала*/}
                        <img id="gps" src="assets/images/GPS_стрелка.png" draggable="false"/>
                        <button id="city" onClick={handleCityClick}>
                            {selectedCity || 'Город'}
                        </button>
                        <button id="address" onClick={handleFilialClick}>
                            {selectedFilial || 'Адрес'}
                        </button>
                        <button id="work">Режим работы</button>
                        <img id="arrow_down" src="assets/images/Стрелка вниз (белая).png" draggable="false"/>
                    </div>
                    <div className="menu-check">
                        {/*Проверка статуса заказа*/}
                        <button className="btn-check">Проверка статуса заказа</button>
                    </div>
                </div>
            </div>
            {/*Главное меню*/}
            <div className="main-menu">
                <div className="logo blocks-center">
                    <Link to='/'>
                        <img src="assets/images/Лого_клиент_full 355x100px.png" draggable="false"/>
                    </Link>
                    <nav className="site-menu">
                        <ul>
                            <li><Link to="/services">Услуги</Link></li>
                            <li><Link to="/reviews">Отзывы</Link></li>
                            <li><Link to="/about">О нас</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        {showCityModal && (
            <ChooseCityFilial 
                onClose={handleModalClose}
                initialCity={modalType === 'filial' ? selectedCity : ''}
                initialFilial={modalType === 'filial' ? '' : selectedFilial}
            />
        )}
        </>
    )
}

export default Header