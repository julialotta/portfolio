import { Outlet } from "react-router-dom";
import background from "../assets/Desktop.png";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

export const Layout = () => {
  return (
    <div className='appContainer'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
