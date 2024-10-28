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
    <div className="min-h-screen bg-gray-900 text-white ">
      <Link to="/home">Home</Link>
      <h2>Datos del Proyecto</h2>
      <form onSubmit={handleSubmit}  className="space-y-6 items-center">
        <div>
          <label className="block text-sm font-medium text-gray-300">Nombre:</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">Descripción:</label>
          <textarea
            name="description"
            value={data.description}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">Tecnologías:</label>
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
        <button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">Guardar</button>
      </form>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default RegisterBootCamp;
