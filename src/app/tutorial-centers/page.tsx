"use client";

import { useState } from 'react';
import Map from '@/components/tutorial-centers/Map';
import SearchFilters from '@/components/tutorial-centers/SearchFilters';
import CenterList from '@/components/tutorial-centers/CenterList';
import { TutorialCenter, SearchFilters as FilterType } from '@/types/tutorialCenter';

// Mock data - Replace with API call
const mockCenters: TutorialCenter[] = [
  {
    id: '1',
    name: 'Excellence Tutorial Center',
    address: '123 Main Street, Lagos',
    location: { lat: 6.5244, lng: 3.3792 },
    subjects: ['Mathematics', 'Physics', 'Chemistry'],
    rating: 4.5,
    contact: {
      phone: '+234 123 456 7890',
      email: 'contact@excellence.com',
      website: 'www.excellence.com'
    },
    operatingHours: {
      open: '8:00 AM',
      close: '6:00 PM',
      daysOpen: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    }
  },
  // Add more mock centers as needed
];

export default function TutorialCentersPage() {
  const [filters, setFilters] = useState<FilterType>({});
  const [selectedCenter, setSelectedCenter] = useState<TutorialCenter | null>(null);

  // Filter centers based on search criteria
  const filteredCenters = mockCenters.filter(center => {
    if (filters.subject && !center.subjects.includes(filters.subject)) return false;
    if (filters.rating && center.rating < filters.rating) return false;
    // Distance filtering would require user's location and calculation
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Find Tutorial Centers</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <SearchFilters
              filters={filters}
              onFilterChange={setFilters}
            />
            <CenterList
              centers={filteredCenters}
              onCenterSelect={setSelectedCenter}
            />
          </div>
          
          <div className="lg:col-span-2">
            <Map
              centers={filteredCenters}
              onCenterSelect={setSelectedCenter}
            />
          </div>
        </div>
      </div>
    </div>
  );
}