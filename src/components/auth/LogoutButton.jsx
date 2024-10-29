import { useNavigate } from 'react-router-dom';
import { tokenService } from '../../services/auth/tokenService';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    tokenService.removeToken(); // Eliminar el token del almacenamiento local
    navigate('/'); // Redirigir a la página de inicio de sesión
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
      Cerrar Sesión
    </button>
  );
};

export default LogoutButton;
