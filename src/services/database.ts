import { 
  getFirestore, 
  collection, 
  doc, 
  addDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  Timestamp 
} from 'firebase/firestore';
import { initializeApp, getApps } from 'firebase/app';

// Initialize Firestore - check if app already exists
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);

// Database service class
export class DatabaseService {
  // Waitlist operations
  async addToWaitlist(data: {
    firstName: string;
    lastName: string;
    email: string;
  }) {
    try {
      const docRef = await addDoc(collection(db, 'waitlist'), {
        ...data,
        createdAt: Timestamp.now(),
      });
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error adding to waitlist:', error);
      return { success: false, error: 'Failed to add to waitlist' };
    }
  }

  async getWaitlistEntries() {
    try {
      const q = query(collection(db, 'waitlist'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const entries = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate(),
      }));
      return { success: true, data: entries };
    } catch (error) {
      console.error('Error getting waitlist entries:', error);
      return { success: false, error: 'Failed to get waitlist entries' };
    }
  }

  // User profile operations
  async createUserProfile(userId: string, profileData: any) {
    try {
      await addDoc(collection(db, 'profiles'), {
        userId,
        ...profileData,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });
      return { success: true };
    } catch (error) {
      console.error('Error creating user profile:', error);
      return { success: false, error: 'Failed to create profile' };
    }
  }

  async getUserProfile(userId: string) {
    try {
      const q = query(collection(db, 'profiles'), where('userId', '==', userId));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        return { success: false, error: 'Profile not found' };
      }

      const doc = querySnapshot.docs[0];
      const profile = {
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate(),
        updatedAt: doc.data().updatedAt.toDate(),
      };
      
      return { success: true, data: profile };
    } catch (error) {
      console.error('Error getting user profile:', error);
      return { success: false, error: 'Failed to get profile' };
    }
  }

  async updateUserProfile(profileId: string, updates: any) {
    try {
      const profileRef = doc(db, 'profiles', profileId);
      await updateDoc(profileRef, {
        ...updates,
        updatedAt: Timestamp.now(),
      });
      return { success: true };
    } catch (error) {
      console.error('Error updating user profile:', error);
      return { success: false, error: 'Failed to update profile' };
    }
  }

  // Contact form operations
  async submitContactForm(data: {
    name: string;
    email: string;
    message: string;
  }) {
    try {
      await addDoc(collection(db, 'contacts'), {
        ...data,
        createdAt: Timestamp.now(),
        status: 'new',
      });
      return { success: true };
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return { success: false, error: 'Failed to submit contact form' };
    }
  }
}

export const databaseService = new DatabaseService();