import Header from "./componentes/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path = "/" element= {<Home/>} />
          <Route path = "/about" element= {<About/>} />
          <Route path = "/skill" element= {<Skills/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
