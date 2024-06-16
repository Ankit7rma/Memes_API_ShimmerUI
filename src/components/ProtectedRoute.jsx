import Login from "./Login";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  let isAuthenticated = false;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
