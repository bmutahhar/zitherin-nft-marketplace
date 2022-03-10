import "./global.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { LandingPage, Marketplace, Mint, Activities } from "./pages";
import { Navbar, ProtectedRoute } from "./components";

export default function App() {
  const { isConnected } = useSelector((state) => state.auth);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/mint" element={<Mint />} />
        <Route
          path="/activities"
          element={
            <ProtectedRoute isConnected={isConnected}>
              <Activities />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
