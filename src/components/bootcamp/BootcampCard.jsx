import { useContext } from 'react';
import { BootcampContext } from '../../provider/BootcampContext';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/bootcamps.css';

const BootcampCard = () => {
  const { bootcamps, deleteBootcamp } = useContext(BootcampContext);
  const navigate = useNavigate();


  const handleEdit = (id) => {
    navigate(`/edit-bootcamp/${id}`);
  };

  const handleDelete = async (id) => {
    deleteBootcamp(id);
  };

  return (
    <div className="bootcamp-container">
      {bootcamps.filter(bootcamp => bootcamp.active).map((bootcamp) => (
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
