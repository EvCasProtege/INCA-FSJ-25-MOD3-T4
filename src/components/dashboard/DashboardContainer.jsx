// DashboardContainer.js
import { useEffect, useState } from 'react';
import bootcampService from '../../services/bootcams/bootcampService';
import { processBootcampData } from '../../utils/utils';
import DashboardComponent from './Dashboard';

const DashboardContainer = () => {
  const [labels, setLabels] = useState([]);
  const [counts, setCounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBootcamps = async () => {
      try {
        const data = await bootcampService.getBootcamps();
        const { labels, counts } = processBootcampData(data);
        setLabels(labels);
        setCounts(counts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bootcamps:', error);
        setLoading(false);
      }
    };

    fetchBootcamps();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <DashboardComponent labels={labels} counts={counts} />
      )}
    </div>
  );
};

export default DashboardContainer;
