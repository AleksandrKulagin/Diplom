import { Link } from 'react-router-dom'

function SidebarAdmin() {
    return (
        <div className="sidebar-menu-admin">
            <div className="sidebar-menu-admin-header">
                <span>Администрирование</span>
            </div>
            <div className="sidebar-menu-item-select">
                <Link to='/admin/clients'>
                    <div className="sidebar-menu-item">
                        <img src="/assets/images/Клиенты_белый.png" alt="" />
                        <p>Клиенты</p>
                    </div>
                </Link>
            </div>
            <div className="sidebar-menu-item-select">
                <Link to='/admin/inventory'>
                    <div className="sidebar-menu-item">
                        <img src="/assets/images/Склад_белый.png" alt="" />
                        <p>Склад</p>
                    </div>
                </Link>
            </div>
            <div className="sidebar-menu-item-select">
                <Link to='/admin/analytics'>
                    <div className="sidebar-menu-item">
                        <img src="/assets/images/Аналитика_белый.png" alt="" />
                        <p>Аналитика</p>
                    </div>
                </Link>
            </div>
            <div className="sidebar-menu-item-select">
                <Link to='/admin/documentation'>
                    <div className="sidebar-menu-item">
                        <img src="/assets/images/Документация_белый.png" alt="" />
                        <p>Документация</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SidebarAdmin