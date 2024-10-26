
import { useEffect, useState } from 'react';
import dashboardService from '../../services/dashboard/dashboardServices';

const UserComponent = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await dashboardService.getDashboard();
        setUsername(data.userLogin.username);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user:', error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Información del Usuario</h2>
      {loading ? (
        <p></p>
      ) : (
        <p>Nombre de usuario: {username}</p>
      )}
    </div>
  );
};

export default UserComponent;
