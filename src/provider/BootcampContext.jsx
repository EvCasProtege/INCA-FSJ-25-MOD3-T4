import { createContext, useState, useEffect } from 'react';
import bootcampService from '../services/bootcams/bootcampService';

export const BootcampContext = createContext();

// eslint-disable-next-line react/prop-types
export const BootcampProvider = ({ children }) => {
  const [bootcamps, setBootcamps] = useState([]);

  useEffect(() => {
    const fetchBootcamps = async () => {
      const response = await bootcampService.getBootcamps();
      setBootcamps(response);
    };

    fetchBootcamps();
  }, []);

  const deleteBootcamp = async (id) => {
    await bootcampService.deleteBootcamp(id);
    setBootcamps(bootcamps.filter(bootcamp => bootcamp.id !== id));
  };

  return (
    <BootcampContext.Provider value={{ bootcamps, deleteBootcamp }}>
      {children}
    </BootcampContext.Provider>
  );
};
