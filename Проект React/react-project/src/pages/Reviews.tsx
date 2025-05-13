import Header from '../components/Header'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'

function Reviews() {
    return (
        <>
            <Helmet title="Отзывы" />
            <Header />
            <main className="main-block">
                <h1 className="name-page-clients">Отзывы</h1>
            </main>
            <Footer />
        </>
    )
}

export default Reviews