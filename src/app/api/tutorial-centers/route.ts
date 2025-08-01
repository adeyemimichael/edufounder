import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { TutorialCenter, SearchFilters } from '@/types/tutorialCenter';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const filters: SearchFilters = {
      subject: searchParams.get('subject') || undefined,
      rating: searchParams.get('rating') ? Number(searchParams.get('rating')) : undefined,
      maxDistance: searchParams.get('maxDistance') ? Number(searchParams.get('maxDistance')) : undefined
    };

    // Mock response - Replace with actual database query
    const centers: TutorialCenter[] = [
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
      }
    ];

    // Apply filters
    const filteredCenters = centers.filter(center => {
      if (filters.subject && !center.subjects.includes(filters.subject)) return false;
      if (filters.rating && center.rating < filters.rating) return false;
      return true;
    });

    return NextResponse.json(filteredCenters);
  } catch (error) {
    console.error('Error searching tutorial centers:', error);
    return NextResponse.json(
      { error: 'Failed to search tutorial centers' },
      { status: 500 }
    );
  }
}