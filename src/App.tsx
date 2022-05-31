import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { NotFound } from "./components/NotFound";
import { Layout } from "./components/Layout";
import { Projectspage } from "./components/pages/Projectspage";
import { Project } from "./components/pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/projects' element={<Projectspage />}></Route>
          <Route path='/projects/:id' element={<Project />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
