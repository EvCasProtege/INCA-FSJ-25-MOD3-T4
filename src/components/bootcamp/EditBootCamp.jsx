import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AiOutlineDelete } from "react-icons/ai";
import bootcampService from '../../services/bootcams/bootcampService';
import { Navbar } from '../landing/Navbar';
import { BootcampContext } from '../../provider/BootcampContext';
import { UserComponent } from '../UserComponent';
import { Footer } from '../landing/Footer';


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
      const bootcamp = bootcamps.find((bootcamp) => bootcamp.id === parseInt(id, 10));
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
    
    try {
      const response = await bootcampService.updateBootcamp(id, data);
      
      if (response.status === 200) {
        navigator('/bootcamps');
      } else {
        alert('Error al actualizar bootcamp');
      }
    } catch (err) {
      err.response.data.message && alert(err.response.data.message);
    }
  };

  if (bootcamps.length === 0) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">Cargando...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <UserComponent />
      <div className="flex flex-col items-center justify-center py-20 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Editar Bootcamp</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-300 mb-2">Nombre:</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-300 mb-2">Descripción:</label>
            <textarea
              name="description"
              value={data.description}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-300">Tecnologías:</label>
            {data.technologies.map((tech, index) => (
              <div key={index} className="flex items-center mb-4">
                <input
                  type="text"
                  value={tech}
                  onChange={(e) => handleTechnologyChange(index, e.target.value)}
                  className="flex-grow p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                <button type="button" onClick={() => removeTechnology(index)} className="ml-2 text-red-500 hover:text-red-700" aria-label="Eliminar tecnología">
                    <AiOutlineDelete size={20} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addTechnology}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Agregar Tecnología
            </button>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2eadaf] hover:bg-[#1c8a8c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2eadaf]"
          >
            Actualizar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
  
};

export default EditBootCamp;
