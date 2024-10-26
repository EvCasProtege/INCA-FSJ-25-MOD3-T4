import { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import bootcampService from '../../services/bootcams/bootcampService';
import '../../assets/css/bootcamps.css';

const BootcampCard = () => {
  const [bootcamps, setBootcamps] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchBootcamps = async () => {
      const response = await bootcampService.getBootcamps();
      setBootcamps(response);
    };

    fetchBootcamps();
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit-bootcamp/${id}`);
  };

  const handleDelete = async (id) => {
    await bootcampService.deleteBootcamp(id);
    setBootcamps(bootcamps.filter(bootcamp => bootcamp.id !== id));
  };

  return (
    <div className="bootcamp-container">
      {bootcamps.map((bootcamp) => (
        <div key={bootcamp.id} className="bootcamp-card">
          <h3>{bootcamp.name}</h3>
          <p>{bootcamp.description}</p>
          <ul>
            {bootcamp.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <button onClick={() => handleEdit(bootcamp.id)}>Editar</button>
          <button onClick={() => handleDelete(bootcamp.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default BootcampCard;
