import { useState } from 'react';
import bootcampService from '../../services/bootcams/bootcampService';
import { Link } from 'react-router-dom';

const RegisterBootCamp = () => {
  // Estado inicial con el JSON proporcionado
  const [data, setData] = useState({
    name: 'nombre',
    description: 'Descripción',
    technologies: ['tecnología1', 'tecnología2'],
  });

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
    console.log('Datos enviados:', data);
    // Aquí puedes hacer algo con los datos, como enviarlos a una API
    const response = await bootcampService.createBootcamp(data);
    console.log(response)
    if(response.status === 201) {
      navigator.navigate('/home');
    }else{  
      alert('Error al crear bootcamp')
    }
  };

  return (
    <div>
      <Link to="/home">Home</Link>
      <h2>Datos del Proyecto</h2>
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
        <button type="submit">Guardar</button>
      </form>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default RegisterBootCamp;
