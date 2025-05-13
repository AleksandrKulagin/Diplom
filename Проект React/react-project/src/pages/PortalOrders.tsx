import { Helmet } from 'react-helmet-async'
import SidebarPortalMenu from '../components/SidebarPortalMenu'

function PortalOrders() {
    return (
        <>
            <Helmet title="Заказы" />
            <div className="body">
                <SidebarPortalMenu />
                <div className="main-display">
                    <div className="name-page">
                        <img src="/assets/images/Заказы_черный.png" alt="" draggable="false" />
                        <h1>Заказы</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortalOrders