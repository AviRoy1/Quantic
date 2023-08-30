import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar";
import MainContainer from "./components/MainContainer";
import LoginPage from "./components/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Psha from "./pages/PSHA/MainContainer";
import Sha from "./pages/SHA/MainContainer";

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#e4ebf3", minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Navbar />} />

          {/* <Route path='/' element={<LoginPage />}/> */}
          <Route path="/Entry-Gate" element={<MainContainer />} />
          <Route path="/PSHA" element={<Psha />} />
          <Route path="/SHA" element={<Sha />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
