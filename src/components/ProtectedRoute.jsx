import { Navigate, useLocation } from 'react-router-dom';
import authService from '../services/auth/authService';

const ProtectedRoute = ({ children, redirectTo = '/' }) => {
  const location = useLocation();

  // Verifica si existe un token de autenticación
  if (!authService.isAuthenticated()) {
    // Guardar la ubicación actual para redirigir después del login
    return <Navigate to={redirectTo} state={{ from: location.pathname }} replace />;
  }

  // Si está autenticado, renderizar los children
  return children;
};

export default ProtectedRoute;