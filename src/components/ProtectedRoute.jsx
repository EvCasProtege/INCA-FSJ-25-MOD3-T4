import { Navigate } from 'react-router-dom';
import authService from '../services/auth/authService';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  if (!authService.isAuthenticated()) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
