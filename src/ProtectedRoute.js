import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ auth }) => {
  const location = useLocation();
  console.log("Protected auth : ", auth);
  console.log("Location in Protedtd : ", location);
  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
export default ProtectedRoute;
