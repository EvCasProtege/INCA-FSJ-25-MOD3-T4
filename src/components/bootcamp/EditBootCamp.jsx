import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import bootcampService from '../../services/bootcams/bootcampService';

const EditBootCamp = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    name: '',
    description: '',
    technologies: [],
  });

  useEffect(() => {
    const fetchBootcamp = async () => {
      const response = await bootcampService.getBootcampById(id);
      setData(response);
    };

    fetchBootcamp();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTechnologyChange = (index, value) => {
    const newTechnologies = [...data.technologies];
    newTechnologies[index] = value;
    setData((prevData) => ({
      ...prevData,
      technologies: newTechnologies,
    }));
  };

  const addTechnology = () => {
    setData((prevData) => ({
      ...prevData,
      technologies: [...prevData.technologies, ''],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Datos actualizados:', data);
    // Aquí puedes hacer algo con los datos, como enviarlos a una API
    const response = await bootcampService.updateBootcamp(id, data);
    console.log(response);
    navigator.navigate('/home');
  };

  return (
    <div>
      <h2>Editar Bootcamp</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={data.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Tecnologías:</label>
          {data.technologies.map((tech, index) => (
            <input
              key={index}
              type="text"
              value={tech}
              onChange={(e) => handleTechnologyChange(index, e.target.value)}
            />
          ))}
          <button type="button" onClick={addTechnology}>
            Agregar Tecnología
          </button>
        </div>
        <button type="submit">Actualizar</button>
      </form>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default EditBootCamp;
