import { Link, Outlet } from "react-router-dom";
import smalllogo from "../assets/smalllogo.png";
import logo from "../assets/logo.png";
import "../scss/main.scss";
import Footer from "./partials/Footer";

export const Layout = () => {
  return (
    <>
      <header className='headerContainer'>
        <div className='logoContainer'>
          <img className='logo' src={logo} alt='Logo' />
          <img className='smalllogo' src={smalllogo} alt='Logo' />
        </div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Hem</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
};
