import { Link, useLocation } from 'react-router-dom';
import SidebarAdmin from './SidebarAdmin';
import SidebarProfile from './SidebarProfile';

function SidebarPortalMenu() {
    const location = useLocation();

    return (
        <div className="sidebar">
            <div className="portal-logo">
                <img src="/assets/images/Лого_сотрудник_full 207x70px.png" alt="" />
            </div>
            <div className="sidebar-menu">
                <div className="sidebar-menu-item-select">
                    <Link to='/portal/main'>
                        <div className={`sidebar-menu-item mainPage ${location.pathname === '/portal/main' ? 'active' : ''}`}>
                            <img src="/assets/images/Главная_белый (Dashboard).png" alt="" />
                            <p>Главная</p>
                        </div>
                    </Link>
                </div>
                <div className="sidebar-menu-item-select">
                    <Link to='/portal/orders'>
                        <div className={`sidebar-menu-item orders ${location.pathname === '/portal/orders' ? 'active' : ''}`}>
                            <img src="/assets/images/Заказы_белый.png" alt="" />
                            <p>Заказы</p>
                        </div>
                    </Link>
                </div>
                <div className="sidebar-menu-item-select">
                    <Link to='/portal/clients'>
                        <div className={`sidebar-menu-item clients ${location.pathname === '/portal/clients' ? 'active' : ''}`}>
                            <img src="/assets/images/Клиенты_белый.png" alt="" />
                            <p>Клиенты</p>
                        </div>
                    </Link>
                </div>
                <div className="sidebar-menu-item-select">
                    <Link to='/portal/inventory'>
                        <div className={`sidebar-menu-item inventory ${location.pathname === '/portal/inventory' ? 'active' : ''}`}>
                            <img src="/assets/images/Склад_белый.png" alt="" />
                            <p>Склад</p>
                        </div>
                    </Link>
                </div>
                <div className="sidebar-menu-item-select">
                    <Link to='/portal/analytics'>
                        <div className={`sidebar-menu-item analytics ${location.pathname === '/portal/analytics' ? 'active' : ''}`}>
                            <img src="/assets/images/Аналитика_белый.png" alt="" />
                            <p>Аналитика</p>
                        </div>
                    </Link>
                </div>
                <div className="sidebar-menu-item-select">
                    <Link to='/portal/documentation'>
                        <div className={`sidebar-menu-item documentation ${location.pathname === '/portal/documentation' ? 'active' : ''}`}>
                            <img src="/assets/images/Документация_белый.png" alt="" />
                            <p>Документация</p>
                        </div>
                    </Link>
                </div>
            </div>
            <SidebarAdmin />
            <SidebarProfile />
        </div>
    );
}

export default SidebarPortalMenu;