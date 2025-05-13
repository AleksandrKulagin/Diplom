import Header from "../components/Header"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet-async";

function Services() {
  return (
    <>
      <Helmet title="Услуги" />
      <Header />
      <main className="main-block">
        <h1 className="name-page-clients">Услуги</h1>
      </main>
      <Footer />
    </>
  );
}

export default Services
