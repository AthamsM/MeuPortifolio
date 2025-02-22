import Header from "./componentes/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path = "/MeuPortfolio/" element= {<Home/>} />
          <Route path = "/MeuPortfolio/about" element= {<About/>} />
          <Route path = "/MeuPortfolio/projetos" element= {<Projects/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
