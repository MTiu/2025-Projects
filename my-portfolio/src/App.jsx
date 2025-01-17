import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./components/Home/Home"
import Gallery from "./components/Gallery/Gallery"
import About from "./components/About/About"
import Header from './components/Header';
function App() {

  return (
    <>
      <Router>
        <Header/>
          <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/gallery" element={<Gallery />}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
