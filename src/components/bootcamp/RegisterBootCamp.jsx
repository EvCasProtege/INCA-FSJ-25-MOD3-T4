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
    if (response.status === 201) {
      navigator.navigate('/home');
    } else {
      alert('Error al crear bootcamp')
    }
  };

  return (
    <div className="min-h-screen  bg-gray-900 text-white ">
      <div className="">
        <div className='p-6'>
          <nav className="hidden md:flex space-x-4">
            <Link to="/inicio" className="text-white hover:text-[#2eadaf] px-3 py-2 rounded-md text-sm font-medium" activeClassName="bg-gray-700 text-[#2eadaf]">Home</Link>
          </nav>
          <h2 className='text-3xl font-bold text-center mb-12'>Datos del Proyecto</h2>
        </div>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <div className='mb-5'>
            <label className="block text-sm font-medium text-gray-300">Nombre:</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

            />
          </div>
          <div className='mb-5' >
            <label className="block text-sm font-medium text-gray-300">Descripción:</label>
            <textarea
              name="description"
              value={data.description}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className='mb-5'>
            <label className="block mb-5 text-sm font-medium text-gray-300">Tecnologías:</label>
            {data.technologies.map((tech, index) => (
              <input
                key={index}
                type="text"
                value={tech}
                onChange={(e) => handleTechnologyChange(index, e.target.value)}
                className="block mb-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"


              />
            ))}
          </div>
          <div className='mb-5'>
            <button type="button" className="w-full bg-teal-800 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300" onClick={addTechnology}>
              Agregar Tecnología
            </button>
          </div>
          <button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">Guardar</button>
        </form>
      </div>

      <pre>{JSON.stringify(data, null, 2)}</pre>

    </div>
  );
};

export default RegisterBootCamp;
