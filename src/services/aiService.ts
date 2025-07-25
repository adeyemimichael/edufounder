import { User } from '@/types';

interface AIResponse {
  content: string;
  suggestions?: string[];
  actions?: string[];
}

interface ConversationContext {
  user: User | null;
  previousMessages: string[];
  userProfile?: any;
}

export class AICompanionService {
  private apiKey: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY || '';
    this.baseUrl = 'https://api.openai.com/v1';
  }

  async generateResponse(
    userMessage: string, 
    context: ConversationContext
  ): Promise<AIResponse> {
    // For now, we'll use rule-based responses
    // Later, you can integrate with OpenAI API
    return this.generateRuleBasedResponse(userMessage, context);
  }

  private generateRuleBasedResponse(
    userMessage: string, 
    context: ConversationContext
  ): AIResponse {
    const message = userMessage.toLowerCase();
    const userName = context.user?.firstName || 'there';

    // Career guidance
    if (this.containsKeywords(message, ['career', 'job', 'work', 'profession'])) {
      return {
        content: `Great question about careers, ${userName}! Based on your profile, I can see you're building valuable skills. Let me help you explore career paths that align with your strengths. What industry interests you most?`,
        suggestions: [
          "Tell me about tech careers",
          "What skills should I develop?",
          "Help me find internships"
        ]
      };
    }

    // Resume and CV help
    if (this.containsKeywords(message, ['resume', 'cv', 'portfolio'])) {
      return {
        content: `I'd love to help you create an outstanding resume, ${userName}! A great resume tells your story effectively. Let's start by reviewing your education, experience, and key achievements.`,
        suggestions: [
          "Review my education section",
          "Help with work experience",
          "Improve my skills section"
        ]
      };
    }

    // Skills and learning
    if (this.containsKeywords(message, ['skill', 'learn', 'study', 'course'])) {
      return {
        content: `Continuous learning is the key to success! I can help you identify in-demand skills and create a learning roadmap. What area would you like to focus on?`,
        suggestions: [
          "Technical skills for my field",
          "Soft skills development",
          "Certification recommendations"
        ]
      };
    }

    // Interview preparation
    if (this.containsKeywords(message, ['interview', 'preparation', 'questions'])) {
      return {
        content: `Interview prep is crucial for landing your dream job! I can help you practice common questions, research companies, and build confidence. Let's get you ready to shine!`,
        suggestions: [
          "Practice behavioral questions",
          "Technical interview prep",
          "Company research tips"
        ]
      };
    }

    // Networking
    if (this.containsKeywords(message, ['network', 'connect', 'linkedin', 'professional'])) {
      return {
        content: `Networking is so important for career growth! Building genuine professional relationships can open doors to opportunities. Let me help you develop your networking strategy.`,
        suggestions: [
          "LinkedIn optimization tips",
          "Networking event strategies",
          "Building professional relationships"
        ]
      };
    }

    // Goal setting
    if (this.containsKeywords(message, ['goal', 'plan', 'future', 'roadmap'])) {
      return {
        content: `Setting clear goals is the first step to achieving them! Let's work together to create a personalized career roadmap that aligns with your aspirations and timeline.`,
        suggestions: [
          "Set short-term goals",
          "Create a 5-year plan",
          "Track my progress"
        ]
      };
    }

    // Greeting
    if (this.containsKeywords(message, ['hello', 'hi', 'hey', 'good morning', 'good afternoon'])) {
      return {
        content: `Hello ${userName}! 👋 I'm so excited to help you on your career journey today. I'm here to provide guidance, answer questions, and help you achieve your professional goals. What's on your mind?`,
        suggestions: [
          "Help me plan my career",
          "Review my profile",
          "Find learning opportunities"
        ]
      };
    }

    // Motivation and encouragement
    if (this.containsKeywords(message, ['stuck', 'confused', 'lost', 'help', 'don\'t know'])) {
      return {
        content: `I understand it can feel overwhelming sometimes, ${userName}. That's completely normal! Career development is a journey, not a destination. Let's break things down into manageable steps and find clarity together.`,
        suggestions: [
          "Assess my current situation",
          "Explore different options",
          "Create an action plan"
        ]
      };
    }

    // Default response
    return {
      content: `That's an interesting point, ${userName}! I'm here to help you with all aspects of your career journey - from skill development and resume building to interview prep and goal setting. Could you tell me more about what you'd like to explore?`,
      suggestions: [
        "Career guidance",
        "Skill development",
        "Resume help",
        "Interview preparation"
      ]
    };
  }

  private containsKeywords(message: string, keywords: string[]): boolean {
    return keywords.some(keyword => message.includes(keyword));
  }

  // Future: OpenAI API integration
  async generateOpenAIResponse(
    userMessage: string, 
    context: ConversationContext
  ): Promise<AIResponse> {
    if (!this.apiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const systemPrompt = `You are EduBot, a friendly and knowledgeable AI career companion for EduFounder. 
    You help students and professionals with:
    - Career guidance and planning
    - Resume and portfolio development
    - Skill development recommendations
    - Interview preparation
    - Educational pathway advice
    - Professional networking tips
    
    User context: ${context.user ? `Name: ${context.user.firstName} ${context.user.lastName}, Email: ${context.user.email}` : 'Anonymous user'}
    
    Be conversational, encouraging, and provide actionable advice. Keep responses concise but helpful.`;

    try {
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userMessage }
          ],
          max_tokens: 200,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      
      return {
        content: data.choices[0].message.content,
        suggestions: [] // Could be enhanced to extract suggestions
      };
    } catch (error) {
      console.error('OpenAI API error:', error);
      // Fallback to rule-based response
      return this.generateRuleBasedResponse(userMessage, context);
    }
  }
}

export const aiCompanionService = new AICompanionService();