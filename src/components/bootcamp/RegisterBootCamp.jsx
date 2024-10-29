import { useState } from 'react';
import { useForm } from "react-hook-form";
import bootcampService from '../../services/bootcams/bootcampService';
import { useNavigate } from 'react-router-dom';
import { AiOutlineDelete } from "react-icons/ai";
import { Navbar } from '../landing/Navbar';
import { UserComponent } from '../UserComponent';
import { Footer } from '../landing/Footer';

const RegisterBootCamp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [data, setData] = useState({
    name: '',
    description: '',
    technologies: [''],
  });

  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setValue(name, value);
  };

  const handleTechnologyChange = (index, value) => {
    const newTechnologies = [...data.technologies];
    newTechnologies[index] = value;
    setData((prevData) => ({
      ...prevData,
      technologies: newTechnologies,
    }));
    setValue(`technologies[${index}]`, value);
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

  const onSubmit = async (formData) => {
    setError('');
    if (data.technologies.length === 0 || data.technologies.some(tech => !tech)) {
      setError('Debes agregar al menos una tecnología.');
      return;
    }
    try {
      await bootcampService.createBootcamp(data);

      navigate('/bootcamps');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <UserComponent />
      <div className="py-20 bg-gray-800">
        <h2 className='text-3xl font-bold text-center mb-12'>Añadir un Nuevo Bootcamp</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
          <div className='mb-5'>
            <label className="block text-sm font-medium text-gray-300">Nombre:</label>
            <input
              id='name'
              type="text"
              name="name"
              placeholder='Ej. Desarrollo Web con ReactJS'
              value={data.name}
              {...register("name", { required: "El nombre del bootcamp es requerido." })}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.name && <p className="mt-2 text-sm text-red-600 text-center">{errors.name.message}</p>}
          </div>
          <div className='mb-5'>
            <label className="block text-sm font-medium text-gray-300">Descripción:</label>
            <textarea
              id='description'
              name="description"
              placeholder='Descripción del Bootcamp'
              value={data.description}
              {...register("description", { required: "Debes agregar una descripción para el bootcamp." })}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            {errors.description && <p className="mt-2 text-sm text-red-600 text-center">{errors.description.message}</p>}
          </div>
          <div className="mb-5">
            <label className="block mb-5 text-sm font-medium text-gray-300">Tecnologías:</label>
            {data.technologies.map((tech, index) => (
              <div key={index} className="flex items-center mb-4">
                <input
                  id='technology'
                  type="text"
                  placeholder='Ej. JavaScript'
                  value={tech}
                  {...register("technology", { required: "Debes agregar al menos una tecnología." })}
                  onChange={(e) => handleTechnologyChange(index, e.target.value)}
                  className="flex-grow p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button type="button" onClick={() => removeTechnology(index)} className="ml-2 text-red-500 hover:text-red-700" aria-label="Eliminar tecnología">
                  <AiOutlineDelete size={20} />
                </button>
              </div>
            ))}
            <button type="button" className="mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2eadaf]" onClick={addTechnology}>
              Añadir tecnología
            </button>
            {errors.technology && <p className="mt-2 text-sm text-red-600 text-center">{errors.technology.message}</p>}
          </div>
          <div>
            {error && <div className="mt-2 text-sm text-red-600 text-center">{error}</div>}
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#2eadaf] hover:bg-[#1c8a8c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2eadaf]">Crear Bootcamp</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterBootCamp;
