export interface AcademicResult {
  examType: 'WAEC' | 'JAMB' | 'POST_UTME';
  score?: number;
  subjects?: {
    name: string;
    grade: string;
  }[];
}

export interface Passion {
  name: string;
  level: 'high' | 'medium' | 'low';
}

export interface CourseRecommendation {
  name: string;
  universities: {
    name: string;
    location: string;
    requirements: {
      minimumJambScore: number;
      minimumPostUtmeScore: number;
      requiredSubjects: string[];
    };
  }[];
  careerProspects: string[];
  matchPercentage: number;
}

export interface PredictionRequest {
  academicResults: AcademicResult[];
  passions: Passion[];
  location: string;
}