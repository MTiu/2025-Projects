import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./components/Home/Home"
import Projects from "./components/Projects/Projects"
import About from "./components/About/About"
import Header from './components/Header/Header';

function App() {

  return (
    <>
      <Router>
        <Header/>
          <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/projects" element={<Projects />}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
