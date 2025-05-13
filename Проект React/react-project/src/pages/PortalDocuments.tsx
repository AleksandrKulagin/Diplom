import SidebarPortalMenu from '../components/SidebarPortalMenu'
import { Helmet } from 'react-helmet-async'

function PortalDocuments() {
    return (
        <>
            <Helmet title="Документация" />
            <div className="body">
                <SidebarPortalMenu />
                <div className="main-display">
                    <div className="name-page">
                        <img src="/assets/images/Документация_черный.png" alt="" draggable="false" />
                        <h1>Документация</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortalDocuments