import { NextRequest, NextResponse } from 'next/server';
import { databaseService } from '@/services/database';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: userId } = await params;

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const result = await databaseService.getUserProfile(userId);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: result.error === 'Profile not found' ? 404 : 500 }
      );
    }

    return NextResponse.json(result.data);

  } catch (error) {
    console.error('User GET API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: userId } = await params;
    const body = await request.json();

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    // First, get the current profile to get the profile ID
    const currentProfile = await databaseService.getUserProfile(userId);

    if (!currentProfile.success) {
      return NextResponse.json(
        { error: 'Profile not found' },
        { status: 404 }
      );
    }

    // Update the profile
    const result = await databaseService.updateUserProfile(
      currentProfile.data!.id,
      body
    );

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Profile updated successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('User PUT API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}