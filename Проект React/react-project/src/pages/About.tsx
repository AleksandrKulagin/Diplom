import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

function About() {
    return (
        <>
            <Helmet title="О нас" />
            <Header />
            <main className="main-block">
                <h1 className="name-page-clients">О нас</h1>
            </main>
            <Footer />
        </>
    );
}

export default About;
