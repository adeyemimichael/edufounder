import axios from 'axios';
import { PredictionRequest, CourseRecommendation } from '@/types/course';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

export async function getPredictions(request: PredictionRequest): Promise<CourseRecommendation[]> {
  try {
    const response = await axios.post(`${API_BASE_URL}/course-predictor`, request);
    return response.data;
  } catch (error) {
    console.error('Error getting predictions:', error);
    throw error;
  }
}