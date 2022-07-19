// import "./App.css";
import { TheApp } from "./styles/app.styled.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Navbar from "./components/navbar.js";

function App() {
  return (
    <TheApp>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </TheApp>
  );
}

export default App;
