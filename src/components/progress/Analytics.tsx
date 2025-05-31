"use client";

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Analytics() {
  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Average Grade',
        data: [75, 82, 78, 85, 88, 90],
        borderColor: 'rgb(0, 0, 0)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: 'Performance Trends'
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Study Hours</h3>
          <p className="text-3xl font-bold">24.5</p>
          <p className="text-sm text-gray-500">This week</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Completed Tasks</h3>
          <p className="text-3xl font-bold">18</p>
          <p className="text-sm text-gray-500">This week</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Average Grade</h3>
          <p className="text-3xl font-bold">85%</p>
          <p className="text-sm text-gray-500">This semester</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-medium mb-4">Grade Progress</h3>
        <Line data={performanceData} options={options} />
      </div>
    </div>
  );
}