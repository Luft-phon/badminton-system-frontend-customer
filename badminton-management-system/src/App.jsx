import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import PublicLayout from "./Layout/PublicLayout";
import DashboardLayout from "./Layout/DashboardLayout";

import LandingPage from "./page/landing/LandingPage";
import RegulationPage from "./page/landing/RegulationPage";
import AuthenticatePage from "./page/member/auth/AuthenticatePage";
import RegisterPage from "./page/member/auth/RegisterPage";
import DashBoardPage from "./page/landing/Dashboard";
import VerificationPage from "./page/member/auth/VerificationPage";
import BookingConfirmationPage from "./page/member/booking/BookingConfirmationPage";
import UserDetailPage from "./page/member/user/UserDetailPage";

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
        <Route index element={<DashBoardPage />} />
        <Route path="bookingconfirm" element={<BookingConfirmationPage />}/>
        <Route path="user" element={<UserDetailPage />}/>
      </Route>

    </Routes>
  );
}

export default App;
