import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AcademicResult, Passion } from '@/types/course';

interface ResultFormProps {
  onSubmit: (data: { academicResults: AcademicResult[]; passions: Passion[]; location: string }) => void;
}

export default function ResultForm({ onSubmit }: ResultFormProps) {
  const [academicResults, setAcademicResults] = useState<AcademicResult[]>([]);
  const [passions, setPassions] = useState<Passion[]>([]);
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ academicResults, passions, location });
  };

  const addResult = (examType: AcademicResult['examType']) => {
    setAcademicResults([...academicResults, { examType, subjects: [] }]);
  };

  const addPassion = () => {
    setPassions([...passions, { name: '', level: 'medium' }]);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-6">Enter Your Academic Details</h2>

      {/* Academic Results Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Academic Results</h3>
        {academicResults.map((result, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <h4 className="font-medium mb-2">{result.examType}</h4>
            {result.examType === 'JAMB' || result.examType === 'POST_UTME' ? (
              <input
                type="number"
                placeholder="Enter score"
                className="w-full p-2 border rounded"
                onChange={(e) => {
                  const newResults = [...academicResults];
                  newResults[index].score = Number(e.target.value);
                  setAcademicResults(newResults);
                }}
              />
            ) : (
              <div>
                {/* WAEC subjects input would go here */}
              </div>
            )}
          </div>
        ))}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => addResult('WAEC')}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Add WAEC Result
          </button>
          <button
            type="button"
            onClick={() => addResult('JAMB')}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Add JAMB Score
          </button>
          <button
            type="button"
            onClick={() => addResult('POST_UTME')}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Add POST-UTME Score
          </button>
        </div>
      </div>

      {/* Passions Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Your Passions</h3>
        {passions.map((passion, index) => (
          <div key={index} className="mb-4 flex gap-4">
            <input
              type="text"
              placeholder="Enter your passion"
              className="flex-1 p-2 border rounded"
              value={passion.name}
              onChange={(e) => {
                const newPassions = [...passions];
                newPassions[index].name = e.target.value;
                setPassions(newPassions);
              }}
            />
            <select
              className="p-2 border rounded"
              value={passion.level}
              onChange={(e) => {
                const newPassions = [...passions];
                newPassions[index].level = e.target.value as 'high' | 'medium' | 'low';
                setPassions(newPassions);
              }}
            >
              <option value="high">High Interest</option>
              <option value="medium">Medium Interest</option>
              <option value="low">Low Interest</option>
            </select>
          </div>
        ))}
        <button
          type="button"
          onClick={addPassion}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Add Passion
        </button>
      </div>

      {/* Location Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Preferred Location</h3>
        <input
          type="text"
          placeholder="Enter your preferred study location"
          className="w-full p-2 border rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
      >
        Get Course Predictions
      </button>
    </motion.form>
  );
}