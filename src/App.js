// import "./App.css";
import { TheApp } from "./styles/app.styled.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.js";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Profile from "./pages/profile.js";

function App() {
  return (
    <TheApp>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </TheApp>
  );
}

export default App;
