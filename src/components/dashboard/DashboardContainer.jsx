import { useContext, useEffect, useState } from 'react';
import { BootcampContext } from '../../provider/BootcampContext';
import { processBootcampData } from '../../utils/utils';
import DashboardComponent from './Dashboard';
import { Link } from 'react-router-dom';

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
          <Link to="/">Regresar</Link>
          <DashboardComponent labels={labels} counts={counts} />
        </>        
      )}
    </div>
  );
};

export default DashboardContainer;
