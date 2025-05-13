import SidebarPortalMenu from '../components/SidebarPortalMenu'
import { Helmet } from 'react-helmet-async'

function PortalInventory() {
    return (
        <>
            <Helmet title="Склад" />
            <div className="body">
                <SidebarPortalMenu />
                <div className="main-display">
                    <div className="name-page">
                        <img src="/assets/images/Склад_черный.png" alt="" draggable="false" />
                        <h1>Склад</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortalInventory