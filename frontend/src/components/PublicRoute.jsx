// PublicRoute.jsx
import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";

function PublicRoute({ children }) {
  const { accessToken } = useUser();
  return accessToken ? <Navigate to="/" /> : children;
}

export default PublicRoute;
