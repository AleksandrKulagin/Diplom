import SidebarPortalMenu from '../components/SidebarPortalMenu'
import { Helmet } from 'react-helmet-async'

function PortalAnalytics() {
    return (
        <>
            <Helmet title="Аналитика" />
            <div className="body">
                <SidebarPortalMenu />
                <div className="main-display">
                    <div className="name-page">
                        <img src="/assets/images/Аналитика_черный.png" alt="" draggable="false" />
                        <h1>Аналитика</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortalAnalytics