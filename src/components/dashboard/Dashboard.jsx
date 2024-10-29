/* eslint-disable react/prop-types */
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const DashboardComponent = ({ labels, counts }) => {
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
    <div className="flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold text-center mb-12">Dashboard de Tecnologías en Cursos Activos</h2>
        <div className="w-full max-w-full sm:max-w-3xl bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
            <Bar data={chartData} options={{ scales: { y: { beginAtZero: true } } }} />
        </div>
    </div>
  );
};
