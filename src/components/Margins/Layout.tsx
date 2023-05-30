import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./styles/Layout.css";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
