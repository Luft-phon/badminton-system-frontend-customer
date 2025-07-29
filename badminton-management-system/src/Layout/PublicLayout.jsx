import { Outlet } from "react-router-dom";
import Navbar from "../component/shared/Navbar";
import Footer from "../component/shared/Footer";

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
