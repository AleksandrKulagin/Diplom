import { Helmet } from "react-helmet-async"
import SidebarPortalMenu from "../components/SidebarPortalMenu"

function Profile() {
    return (
        <>
            <Helmet title="Профиль" />
            <div className="body">
                <SidebarPortalMenu />
                <div className="main-display">
                    <div className="name-page">
                        <img src="/assets/images/Профиль_черный.png" alt="" draggable="false" />
                        <h1>Профиль</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile