import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeClientPage from './pages/HomeClientPage'
import About from './pages/About'
import Reviews from './pages/Reviews'
import Services from './pages/Services'
import LoginPage from './pages/LoginPage'
import { LocationProvider } from './components/LocationContext'

//const isAuth = false

function App() {
  return (
    <LocationProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeClientPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/reviews' element={<Reviews />} />
            <Route path='/services' element={<Services />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LocationProvider>
  )
}

export default App
