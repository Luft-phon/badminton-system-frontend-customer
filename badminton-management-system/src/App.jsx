import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Navbar from './component/Navbar'
import LandingPage from './page/landingPage'
import AboutCard from './component/AboutCard'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom';
import RegulationPage from './page/RegulationPage'

function App() {
  return (
    <div className='container'>
      <Navbar />
      <main className="main-content">
        <Routes>                  
          <Route path='/' element={<LandingPage />}/>
          <Route path='/regulation' element={<RegulationPage />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
