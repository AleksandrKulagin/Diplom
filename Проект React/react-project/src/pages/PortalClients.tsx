import SidebarPortalMenu from '../components/SidebarPortalMenu'
import { Helmet } from 'react-helmet-async'

function PortalClients() {
    return (
        <>
            <Helmet title="Клиенты" />
            <div className="body">
                <SidebarPortalMenu />
                <div className="main-display">
                    <div className="name-page">
                        <img src="/assets/images/Клиенты_черный.png" alt="" draggable="false" />
                        <h1>Клиенты</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortalClients