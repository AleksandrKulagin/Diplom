import { Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LocationProvider } from "./components/LocationContext";
import HomeClientPage from "./pages/HomeClientPage";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Services from "./pages/Services";
import LoginPage from "./pages/LoginPage";
import PortalMainPage from "./pages/PortalMainPage";
import PortalOrders from "./pages/PortalOrders";
import PortalClients from "./pages/PortalClients";
import PortalInventory from "./pages/PortalInventory";
import PortalAnalytics from "./pages/PortalAnalytics";
import PortalDocuments from "./pages/PortalDocuments";
import Profile from "./pages/Profile";
import Error404 from "./pages/Error404";

function AppRoutes() {
  return (
    <LocationProvider>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<HomeClientPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/portal/main" element={<PortalMainPage />} />
          <Route path="/portal/orders" element={<PortalOrders />} />
          <Route path="/portal/clients" element={<PortalClients />} />
          <Route path="/portal/inventory" element={<PortalInventory />} />
          <Route path="/portal/analytics" element={<PortalAnalytics />} />
          <Route path="/portal/documentation" element={<PortalDocuments />} />
          <Route path="/portal/profile" element={<Profile />} />
          <Route path="/portal" element={<Navigate to="/portal/main" replace />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HelmetProvider>
    </LocationProvider>
  );
}

export default AppRoutes; 