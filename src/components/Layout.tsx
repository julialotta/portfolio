import { Outlet } from "react-router-dom";

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
      <motion.main
        variants={animations}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.6 }}
      >
        <Outlet />
      </motion.main>
    </>
  );
};
