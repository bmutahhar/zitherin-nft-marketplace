import "./global.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages";
import { Navbar } from "./components";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/marketplace" element={<LandingPage />} />
        <Route path="/mint" element={<LandingPage />} />
      </Routes>
    </>
  );
}
