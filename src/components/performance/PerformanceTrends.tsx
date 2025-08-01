"use client";

import { useState } from 'react';
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

interface SubjectPerformance {
  subject: string;
  scores: number[];
  dates: string[];
}

export default function PerformanceTrends() {
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [timeRange, setTimeRange] = useState('month');

  const subjects: SubjectPerformance[] = [
    {
      subject: 'Mathematics',
      scores: [85, 88, 92, 87, 90],
      dates: ['Jan 1', 'Jan 8', 'Jan 15', 'Jan 22', 'Jan 29']
    },
    {
      subject: 'Physics',
      scores: [78, 82, 85, 88, 86],
      dates: ['Jan 1', 'Jan 8', 'Jan 15', 'Jan 22', 'Jan 29']
    }
  ];

  const chartData = {
    labels: subjects[0].dates,
    datasets: subjects.map((subject) => ({
      label: subject.subject,
      data: subject.scores,
      borderColor: subject.subject === 'Mathematics' ? 'rgb(75, 192, 192)' : 'rgb(255, 99, 132)',
      tension: 0.1
    }))
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: 'Performance Over Time'
      }
    },
    scales: {
      y: {
        min: 0,
        max: 100
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-x-4">
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="all">All Subjects</option>
            {subjects.map((subject) => (
              <option key={subject.subject} value={subject.subject}>
                {subject.subject}
              </option>
            ))}
          </select>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="semester">This Semester</option>
          </select>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border">
        <Line data={chartData} options={options} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <div key={subject.subject} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">{subject.subject}</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Average Score:</span>
                <span className="font-medium">
                  {(subject.scores.reduce((a, b) => a + b, 0) / subject.scores.length).toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span>Highest Score:</span>
                <span className="font-medium">{Math.max(...subject.scores)}%</span>
              </div>
              <div className="flex justify-between">
                <span>Lowest Score:</span>
                <span className="font-medium">{Math.min(...subject.scores)}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}