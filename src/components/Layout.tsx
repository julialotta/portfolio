import { Link, NavLink, Outlet } from "react-router-dom";
import smalllogo from "../assets/smalllogo.png";
import logo from "../assets/logo.png";
import "../scss/main.scss";
import Footer from "./partials/Footer";
import { motion } from "framer-motion";

export const Layout = () => {
  const animations = {
    initial: { opacity: 0, x: "100vw" },
    animate: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "-100vw" },
  };
  return (
    <>
      <header className='headerContainer'>
        <div className='logoContainer'>
          <Link to='/'>
            <img className='logo' src={logo} alt='Logo' />
            <img className='smalllogo' src={smalllogo} alt='Logo' />
          </Link>
        </div>
      </header>
      <motion.main
        variants={animations}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.6 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </>
  );
};
