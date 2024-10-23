import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import dashboardService from '../../services/dashboard/dashboardServices';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await dashboardService.getDashboard();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching datos de dashboard:', error);
      }
    };

    fetchProducts();
  }, []);

  const productNames = products.map(product => product.name);
  const productQuantities = products.map(product => product.quantity);

  const data = {
    labels: productNames,
    datasets: [
      {
        label: 'Cantidad de Bootcamps',
        data: productQuantities,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Dashboard de Bootcamps</h2>
      <div className="w-full max-w-4xl">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
