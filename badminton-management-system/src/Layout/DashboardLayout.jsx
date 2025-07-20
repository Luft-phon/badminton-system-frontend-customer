import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
// import DashboardNavbar from "../component/DashboardNavbar";

function DashboardLayout() {
 return (
    <div className="container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
