// User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  username?: string;
  profileImage?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Auth Types
export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

// Waitlist Types
export interface WaitlistEntry {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
}

// Profile Types
export interface UserProfile {
  id: string;
  userId: string;
  bio?: string;
  skills: string[];
  education: Education[];
  experience: Experience[];
  certifications: Certification[];
  projects: Project[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate?: Date;
  gpa?: number;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  skills: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: Date;
  expiryDate?: Date;
  credentialId?: string;
  url?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  githubUrl?: string;
  startDate: Date;
  endDate?: Date;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form Types
export interface LoginForm {
  email: string;
  password: string;
}

export interface SignupForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface WaitlistForm {
  firstName: string;
  lastName: string;
  email: string;
}