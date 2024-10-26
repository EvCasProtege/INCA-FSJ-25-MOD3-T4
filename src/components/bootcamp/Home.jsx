import { useNavigate } from 'react-router-dom';
import BootcampCard from './BootcampCard';
import DashboardContainer from '../dashboard/DashboardContainer';
import UserComponent from '../auth/User';
import LogoutButton from '../auth/LogoutButton';
import { BootcampProvider } from '../../provider/BootcampContext';

const Home = () => {
 const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/registro');
  };

  return (
    <BootcampProvider>
      <div>
        <LogoutButton />
        <UserComponent />
        <button onClick={handleRegisterClick}>Registrar Nuevo Bootcamp</button>
        <BootcampCard />
        <DashboardContainer />
      </div>
    </BootcampProvider>
  );
};

export default Home;
