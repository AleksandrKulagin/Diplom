import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useLocation } from "./LocationContext"
import ChooseCityFilial from "./ChooseCityFilial"
import CheckOrderModal from "./CheckOrderModal"

// Импортируем изображения
import gpsIcon from '/assets/images/GPS_стрелка.png'
import logoClient from '/assets/images/Лого_клиент_full 355x100px.png'

function Header() {
    const { selectedCity, selectedFilial, isLocationSelected } = useLocation();
    const [showCityModal, setShowCityModal] = useState(false);
    const [showCheckOrderModal, setShowCheckOrderModal] = useState(false);
    const [modalType, setModalType] = useState<'city' | 'filial'>('city');

    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisited');
        if (!hasVisited) {
            localStorage.setItem('hasVisited', 'true');
            if (!isLocationSelected()) {
                setShowCityModal(true);
            }
        }
    }, [isLocationSelected]);

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

    const handleCheckOrderClick = () => {
        setShowCheckOrderModal(true);
    };

    const handleCheckOrderModalClose = () => {
        setShowCheckOrderModal(false);
    };

    return (
        <>
            <header className="header">
                {/*Черная полоса*/}
                <div className="black-strip">
                    <div className="blocks-center">
                        <div className="menu-city">
                            {/*Выбор города и филиала*/}
                            <img id="gps" src={gpsIcon} draggable="false" />
                            <button id="city" onClick={handleCityClick}>
                                {selectedCity || 'Город'}
                            </button>
                            <button id="address" onClick={handleFilialClick}>
                                {selectedFilial || 'Адрес'}
                            </button>
                        </div>
                        <div className="menu-check">
                            {/*Проверка статуса заказа*/}
                            <button className="btn-check" onClick={handleCheckOrderClick}>Проверка статуса заказа</button>
                        </div>
                    </div>
                </div>
                {/*Главное меню*/}
                <div className="main-menu">
                    <div className="logo blocks-center">
                        <Link to='/'>
                            <img src={logoClient} draggable="false" />
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
            {showCheckOrderModal && (
                <CheckOrderModal onClose={handleCheckOrderModalClose} />
            )}
        </>
    )
}

export default Header