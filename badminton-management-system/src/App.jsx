import { useLocation, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import LandingPage from './page/landingPage';
import RegulationPage from './page/RegulationPage';
import LoginPage from './page/LoginPage';
import './css/App.css';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="container">
     <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/regulation" element={<RegulationPage />} />
          {/* Trang login cũng nằm trong Routes chung */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
