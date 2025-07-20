import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function PublicLayout() {
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

export default PublicLayout;
