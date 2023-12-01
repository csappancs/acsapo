import About from "./components/About";
import Cv from "./components/Cv";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Menubar from "./components/Menubar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
{/*import Underconstruction from "./components/Underconstruction";*/}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menubar/>
      {/*<Underconstruction/>*/}
            <Routes>
              <Route path="/about" element={<About/>}/>
              <Route path="/cv" element={<Cv/>}/>
              <Route path="/portfolio" element={<Portfolio/>}/>

              <Route path="/" element={<Hero/>}/>
            </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
