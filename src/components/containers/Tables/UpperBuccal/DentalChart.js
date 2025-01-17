import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DentalChart = ({ gingivalMargin, probingDepth }) => {
  // Prepare data for the graph
  const graphData = {
    labels: Array.from({ length: 16 }, (_, i) => `Tooth ${i + 1}`),
    datasets: [
      {
        label: 'Gingival Margin',
        data: gingivalMargin.map((gm) => gm.reduce((sum, val) => sum + val, 0) / 3), // Avg per tooth
        borderColor: 'blue',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: 'Probing Depth',
        data: probingDepth.map((pd) => pd.reduce((sum, val) => sum + val, 0) / 3), // Avg per tooth
        borderColor: 'red',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  const graphOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw.toFixed(2)}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Measurement (mm)',
        },
      },
    },
  };

  return (
    <div className="relative flex flex-col my-5 justify-center items-center py-1">
      {/* Static Grid */}
      {Array.from({ length: 17 }).map((_, idx) => (
        <hr
          key={idx}
          className="absolute w-full border-t-2 border-[#666] z-10"
          style={{ top: `${(idx / 16) * 100}%` }}
        />
      ))}

      {/* Tooth Chart */}
      <div style={{ width: '100%', height: '400px' }}>
        <Line data={graphData} options={graphOptions} />
      </div>
    </div>
  );
};

export default DentalChart;
