"use client";

import { useState, useEffect } from 'react';
import Map from '@/components/tutorial-centers/Map';
import SearchFilters from '@/components/tutorial-centers/SearchFilters';
import CenterList from '@/components/tutorial-centers/CenterList';
import { TutorialCenter, SearchFilters as FilterType } from '@/types/tutorialCenter';
import { searchTutorialCenters } from '@/lib/api/tutorialCenter';

export default function TutorialCentersPage() {
  const [filters, setFilters] = useState<FilterType>({});
  const [centers, setCenters] = useState<TutorialCenter[]>([]);
  const [selectedCenter, setSelectedCenter] = useState<TutorialCenter | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCenters = async () => {
      try {
        setLoading(true);
        setError(null);
        const results = await searchTutorialCenters(filters);
        setCenters(results);
      } catch (err) {
        setError('Failed to fetch tutorial centers. Please try again.');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCenters();
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Find Tutorial Centers</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <SearchFilters
              filters={filters}
              onFilterChange={setFilters}
            />
            
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading centers...</p>
              </div>
            ) : (
              <CenterList
                centers={centers}
                onCenterSelect={setSelectedCenter}
              />
            )}
          </div>
          
          <div className="lg:col-span-2">
            <Map
              centers={centers}
              onCenterSelect={setSelectedCenter}
            />
          </div>
        </div>
      </div>
    </div>
  );
}