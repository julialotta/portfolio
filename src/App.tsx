import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { NotFound } from "./components/NotFound";
import { Layout } from "./components/Layout";
import { Projectspage } from "./components/pages/Projectspage";
import { SingleProject } from "./components/pages/SingleProject";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Routes key={location.pathname} location={location.pathname}>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/projects' element={<Projectspage />}></Route>
          <Route path='/projects/:id' element={<SingleProject />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
