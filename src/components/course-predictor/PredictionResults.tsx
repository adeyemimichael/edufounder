import React from 'react';
import { motion } from 'framer-motion';
import { CourseRecommendation } from '@/types/course';

interface PredictionResultsProps {
  recommendations: CourseRecommendation[];
}

export default function PredictionResults({ recommendations }: PredictionResultsProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Your Course Recommendations</h2>
      <div className="grid gap-6">
        {recommendations.map((course, index) => (
          <motion.div
            key={course.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{course.name}</h3>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                {course.matchPercentage}% Match
              </span>
            </div>

            <div className="mb-4">
              <h4 className="font-medium mb-2">Universities Offering This Course:</h4>
              <div className="grid gap-3">
                {course.universities.map((uni) => (
                  <div key={uni.name} className="border rounded p-3">
                    <h5 className="font-medium">{uni.name}</h5>
                    <p className="text-sm text-gray-600">{uni.location}</p>
                    <div className="mt-2">
                      <p className="text-sm">
                        <span className="font-medium">JAMB:</span> {uni.requirements.minimumJambScore}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">POST-UTME:</span>{' '}
                        {uni.requirements.minimumPostUtmeScore}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Career Prospects:</h4>
              <ul className="list-disc list-inside text-gray-700">
                {course.careerProspects.map((prospect) => (
                  <li key={prospect}>{prospect}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}