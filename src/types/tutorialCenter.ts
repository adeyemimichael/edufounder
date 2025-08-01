export interface TutorialCenter {
  id: string;
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  subjects: string[];
  rating: number;
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  operatingHours: {
    open: string;
    close: string;
    daysOpen: string[];
  };
}

export interface SearchFilters {
  subject?: string;
  rating?: number;
  maxDistance?: number;
}