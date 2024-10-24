import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Eliminar el token del almacenamiento local
    navigate('/'); // Redirigir a la página de inicio de sesión
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
      Cerrar Sesión
    </button>
  );
};

export default LogoutButton;
