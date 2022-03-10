import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isConnected, children }) => {
  return isConnected ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
