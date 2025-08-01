import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { PredictionRequest, CourseRecommendation } from '@/types/course';

export async function POST(request: NextRequest) {
  try {
    const body: PredictionRequest = await request.json();
    
    // Mock response - Replace with actual prediction logic
    const recommendations: CourseRecommendation[] = [
      {
        name: 'Computer Science',
        universities: [
          {
            name: 'University of Lagos',
            location: 'Lagos',
            requirements: {
              minimumJambScore: 200,
              minimumPostUtmeScore: 50,
              requiredSubjects: ['Mathematics', 'Physics', 'Chemistry']
            }
          }
        ],
        careerProspects: ['Software Engineer', 'Data Scientist', 'System Analyst'],
        matchPercentage: 95
      }
    ];

    return NextResponse.json(recommendations);
  } catch (error) {
    console.error('Error processing prediction:', error);
    return NextResponse.json(
      { error: 'Failed to process prediction request' },
      { status: 500 }
    );
  }
}