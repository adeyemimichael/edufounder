import React from 'react';
import ResultForm from '@/components/course-predictor/ResultForm';
import PredictionResults from '@/components/course-predictor/PredictionResults';

export default function CoursePredictorPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Course Predictor</h1>
        <ResultForm
          onSubmit={async (data) => {
            // TODO: Implement API call to prediction service
            console.log('Form submitted:', data);
          }}
        />
        {/* PredictionResults will be rendered conditionally when we have results */}
      </div>
    </div>
  );
}