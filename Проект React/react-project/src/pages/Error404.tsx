import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <>
      <Helmet title='Страница не найдена' />
      <Header />
      <div className='main404'>
        <span className='header404'>404</span>
        <span className='text404'>Страница не найдена</span>
        <Link to='/'>
          <button className='btn404'>Вернуться на главную страницу</button>
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default Error404