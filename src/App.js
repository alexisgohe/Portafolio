import "./App.scss";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portafolio from "./components/Portafolio";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Home />
        <Experience />
        <Portafolio />
        <Resume />
        <Contact />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
