import { useNavigate } from 'react-router-dom';
import BootcampCard from './BootcampCard';
import DashboardContainer from '../dashboard/DashboardContainer';
import UserComponent from '../auth/User';
import LogoutButton from '../auth/LogoutButton';

const Home = () => {
 const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/registro');
  };

  return (
    <div>
      <LogoutButton />
      <UserComponent />
      <button onClick={handleRegisterClick}>Registrar Nuevo Bootcamp</button>
      <BootcampCard />
      <DashboardContainer />
    </div>
  );
};

export default Home;
