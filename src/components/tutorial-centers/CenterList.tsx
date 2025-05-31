import React from 'react';
import { motion } from 'framer-motion';
import { TutorialCenter } from '@/types/tutorialCenter';

interface CenterListProps {
  centers: TutorialCenter[];
  onCenterSelect: (center: TutorialCenter) => void;
}

export default function CenterList({ centers, onCenterSelect }: CenterListProps) {
  return (
    <div className="space-y-4">
      {centers.map((center, index) => (
        <motion.div
          key={center.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onCenterSelect(center)}
        >
          <h3 className="text-lg font-semibold">{center.name}</h3>
          <p className="text-gray-600 text-sm">{center.address}</p>
          
          <div className="mt-2 flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < center.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1 text-sm text-gray-600">{center.rating}</span>
            </div>
          </div>

          <div className="mt-2">
            <p className="text-sm text-gray-600">
              Subjects: {center.subjects.join(', ')}
            </p>
          </div>

          <div className="mt-2 text-sm text-gray-600">
            <p>Open: {center.operatingHours.daysOpen.join(', ')}</p>
            <p>
              Hours: {center.operatingHours.open} - {center.operatingHours.close}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}