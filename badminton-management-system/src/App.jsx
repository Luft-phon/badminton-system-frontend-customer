import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import PublicLayout from "./Layout/PublicLayout";
import DashboardLayout from "./Layout/DashboardLayout";
import LandingPage from "./page/LandingPage";
import RegulationPage from "./page/RegulationPage";
import AuthenticatePage from "./page/AuthenticatePage";
import RegisterPage from "./page/RegisterPage";
import Dashboard from "../src/page/Dashboard";
import VerificationPage from "./page/VerificationPage";
import BookingConfirmationPage from "./page/BookingConfirmationPage";
import UserDetailPage from "./page/UserDetailPage";

function App() {
  return (
    <Routes>
      {/* ✅ PUBLIC ROUTES */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/regulation" element={<RegulationPage />} />
        <Route path="/login" element={<AuthenticatePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verification" element={<VerificationPage />} />
      </Route>

      {/* ✅ PRIVATE (AFTER LOGIN) ROUTES */}
      <Route path="/auth/*" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="bookingconfirm" element={<BookingConfirmationPage />}/>
        <Route path="user" element={<UserDetailPage />}/>
      </Route>

    </Routes>
  );
}

export default App;
