import { WaitlistForm, ApiResponse, WaitlistEntry } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.error || 'An error occurred',
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error',
      };
    }
  }

  // Waitlist API
  async addToWaitlist(formData: WaitlistForm): Promise<ApiResponse<WaitlistEntry>> {
    return this.request<WaitlistEntry>('/waitlist', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  async getWaitlistEntries(): Promise<ApiResponse<WaitlistEntry[]>> {
    return this.request<WaitlistEntry[]>('/waitlist');
  }

  // User API
  async getUserProfile(userId: string): Promise<ApiResponse<any>> {
    return this.request(`/user/${userId}`);
  }

  async updateUserProfile(userId: string, profileData: any): Promise<ApiResponse<any>> {
    return this.request(`/user/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  }

  // Contact API
  async submitContactForm(formData: {
    name: string;
    email: string;
    message: string;
  }): Promise<ApiResponse<any>> {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }
}

export const apiService = new ApiService();