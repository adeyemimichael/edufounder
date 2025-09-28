"use client";

import React from 'react';
import ResultForm from '@/components/course-predictor/ResultForm';
import PredictionResults from '@/components/course-predictor/PredictionResults';
import { getPredictions } from '@/lib/api/course';

interface FormData {
  subjects: Array<{
    name: string;
    grade: string;
  }>;
  interests: string[];
  careerGoals: string;
}

interface CourseRecommendation {
  id: string;
  name: string;
  description: string;
  matchPercentage: number;
  requirements: string[];
  careerPaths: string[];
}

export default function CoursePredictorPage() {
  const [recommendations, setRecommendations] = React.useState<CourseRecommendation[] | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      setError(null);
      const results = await getPredictions(data);
      setRecommendations(results);
    } catch (err) {
      setError('Failed to get predictions. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Course Predictor</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {!recommendations && (
          <ResultForm onSubmit={handleSubmit} />
        )}

        {loading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Analyzing your results...</p>
          </div>
        )}

        {recommendations && (
          <>
            <button
              onClick={() => setRecommendations(null)}
              className="mb-6 text-blue-600 hover:text-blue-800"
            >
              ← Start Over
            </button>
            <PredictionResults recommendations={recommendations} />
          </>
        )}
      </div>
    </div>
  );
}