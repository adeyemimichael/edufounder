import axios from 'axios';
import { TutorialCenter, SearchFilters } from '@/types/tutorialCenter';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

export async function searchTutorialCenters(filters: SearchFilters): Promise<TutorialCenter[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}/tutorial-centers`, {
      params: filters
    });
    return response.data;
  } catch (error) {
    console.error('Error searching tutorial centers:', error);
    throw error;
  }
}