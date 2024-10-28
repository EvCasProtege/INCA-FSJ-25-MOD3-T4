import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import bootcampService from '../../services/bootcams/bootcampService';
import { Navbar } from '../landing/Navbar';
import { BootcampContext } from '../../provider/BootcampContext';
import { UserComponent } from '../UserComponent';


const EditBootCamp = () => {
  
  const navigator = useNavigate();
  const { id } = useParams();
  const { bootcamps, loading } = useContext(BootcampContext);
  const [data, setData] = useState({
    name: '',
    description: '',
    technologies: [],
  });

  useEffect(() => {
    if (!loading && bootcamps.length > 0) {
      console.log('Bootcamps:', bootcamps);
      console.log('ID:', id);
      console.log('Loading:', loading);
      
      const bootcamp = bootcamps.find((bootcamp) => bootcamp.id === parseInt(id, 10));
      console.log('Data:', bootcamp);
      if (bootcamp) {
        setData(bootcamp);
      }
    }
  }, [id, bootcamps, loading]);

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

  const removeTechnology = (index) => {
    const newTechnologies = data.technologies.filter((_, i) => i !== index);
    setData((prevData) => ({
      ...prevData,
      technologies: newTechnologies,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.name || !data.description || data.technologies.length === 0 || data.technologies.some(tech => !tech)) {
      alert('Todos los campos son obligatorios y debe haber al menos una tecnología.');
      return;
    }
    console.log('Datos actualizados:', data);
    try {
      const response = await bootcampService.updateBootcamp(id, data);
      console.log(response);
      if (response.status === 200) {
        navigator('/bootcamps');
      } else {
        alert('Error al actualizar bootcamp');
      }
    } catch (err) {
      console.log(err);
      err.response.data.message && alert(err.response.data.message);
    }
  };

  if (bootcamps.length === 0) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">Cargando...</div>;
  }

  return (
    <div>
      <Navbar />
      <UserComponent />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h2 className="text-2xl font-bold mb-4">Editar Bootcamp</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Nombre:</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Descripción:</label>
            <textarea
              name="description"
              value={data.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">Tecnologías:</label>
            {data.technologies.map((tech, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={tech}
                  onChange={(e) => handleTechnologyChange(index, e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
                <button
                  type="button"
                  onClick={() => removeTechnology(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                >
                  Quitar
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addTechnology}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Agregar Tecnología
            </button>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBootCamp;
