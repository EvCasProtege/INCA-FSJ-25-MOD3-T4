/* eslint-disable react/prop-types */
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardComponent = ({ labels, counts }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Cantidad de Cursos Activos',
        data: counts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Dashboard de Tecnologías en Cursos Activos</h2>
      <div className="w-full max-w-4xl">
        <Bar data={chartData} options={{ scales: { y: { beginAtZero: true } } }} />
      </div>
    </div>
  );
};

export default DashboardComponent;
