import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/NotFound";
import { Layout } from "./components/Layout";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Routes key={location.pathname} location={location.pathname}>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
