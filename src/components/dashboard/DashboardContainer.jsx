import { useContext, useEffect, useState } from 'react';
import { BootcampContext } from '../../provider/BootcampContext';
import { processBootcampData } from '../../utils/utils';
import { DashboardComponent } from './Dashboard';
import { Navbar } from '../landing/Navbar';
import { UserComponent } from '../UserComponent';
import { Footer } from '../landing/Footer';

export const DashboardContainer = () => {
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
    <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <UserComponent />
        <section id="bootcamps" className="py-20 bg-gray-800">
            {loading ? <p>Cargando datos...</p> : <DashboardComponent labels={labels} counts={counts} />}
        </section>
        <Footer />
    </div>
  );
};
