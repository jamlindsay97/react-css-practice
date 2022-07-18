// import "./App.css";
import { TheApp } from "./styles/app.styled.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <TheApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/about" />
        </Routes>
      </BrowserRouter>
    </TheApp>
  );
}

export default App;
