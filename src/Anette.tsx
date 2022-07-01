import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/NotFound";
import { Layout } from "./components/Layout";

import { AnimatePresence } from "framer-motion";

function Anette() {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Routes key={location.pathname} location={location.pathname}>
        <Route path='/anette' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default Anette;
