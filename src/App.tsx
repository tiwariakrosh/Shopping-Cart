import { Container } from "react-bootstrap"
import { Routes, Route } from "react-router-dom"
import './App.css'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Store from "./pages/Store"

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
      <Footer />
    </>

  )
}

export default App
