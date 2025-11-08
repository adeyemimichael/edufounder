import React from 'react';
import type { SearchFilters } from '@/types/tutorialCenter';

interface SearchFiltersProps {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
}

export default function SearchFiltersComponent({ filters, onFilterChange }: SearchFiltersProps) {
  const subjects = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'English',
    'Computer Science',
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Filter Centers</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <select
            className="w-full border rounded-md p-2"
            value={filters.subject || ''}
            onChange={(e) => onFilterChange({ ...filters, subject: e.target.value || undefined })}
          >
            <option value="">All Subjects</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Minimum Rating
          </label>
          <select
            className="w-full border rounded-md p-2"
            value={filters.rating || ''}
            onChange={(e) => onFilterChange({ ...filters, rating: Number(e.target.value) || undefined })}
          >
            <option value="">Any Rating</option>
            {[5, 4, 3, 2, 1].map((rating) => (
              <option key={rating} value={rating}>
                {rating}+ Stars
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Maximum Distance (km)
          </label>
          <input
            type="number"
            className="w-full border rounded-md p-2"
            value={filters.maxDistance || ''}
            onChange={(e) => onFilterChange({ ...filters, maxDistance: Number(e.target.value) || undefined })}
            min="1"
            max="100"
            placeholder="Enter distance"
          />
        </div>
      </div>
    </div>
  );
}