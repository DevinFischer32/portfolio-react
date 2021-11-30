import "./CSS/App.css";
import "./CSS/CSSreset.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
