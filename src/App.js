import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { LandingPage, Marketplace, Mint, Activities } from "./pages";
import { Navbar, ProtectedRoute } from "./components";
import "./global.css";
import "react-multi-carousel/lib/styles.css";
import "react-loading-skeleton/dist/skeleton.css";


const App = () => {
  const { isConnected } = useSelector((state) => state.auth);

  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);
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
};

export default App;
