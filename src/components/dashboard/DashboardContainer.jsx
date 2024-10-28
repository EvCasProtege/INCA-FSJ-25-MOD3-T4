import { useContext, useEffect, useState } from 'react';
import { BootcampContext } from '../../provider/BootcampContext';
import { processBootcampData } from '../../utils/utils';
import DashboardComponent from './Dashboard';
import { Navbar } from '../landing/Navbar';
import { UserComponent } from '../UserComponent';

const DashboardContainer = () => {
  const { bootcamps } = useContext(BootcampContext);
  const [labels, setLabels] = useState([]);
  const [counts, setCounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { labels, counts } = processBootcampData(bootcamps);
    setLabels(labels);
    setCounts(counts);
    setLoading(false);
  }, [bootcamps]);

  return (
    <div>
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <>
         <div className="min-h-screen bg-gray-900 text-white">
          <Navbar />
          <UserComponent />
          <DashboardComponent labels={labels} counts={counts} />
          </div>
        </>        
      )}
    </div>
  );
};

export default DashboardContainer;
