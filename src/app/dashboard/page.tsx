
"use client";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Dashboard() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'education', name: 'Education', icon: '🎓' },
    { id: 'experience', name: 'Experience', icon: '💼' },
    { id: 'projects', name: 'Projects', icon: '🚀' },
    { id: 'settings', name: 'Settings', icon: '⚙️' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                {user.firstName.charAt(0)}{user.lastName.charAt(0)}
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  Welcome back, {user.firstName}!
                </h1>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-lg shadow-sm p-4">
              <ul className="space-y-2">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition ${
                        activeTab === tab.id
                          ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-lg">{tab.icon}</span>
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'overview' && <OverviewTab user={user} />}
              {activeTab === 'profile' && <ProfileTab user={user} />}
              {activeTab === 'education' && <EducationTab />}
              {activeTab === 'experience' && <ExperienceTab />}
              {activeTab === 'projects' && <ProjectsTab />}
              {activeTab === 'settings' && <SettingsTab user={user} />}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Overview Tab Component
function OverviewTab({ user }: { user: any }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-lg text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Profile Completion</p>
                <p className="text-2xl font-bold">65%</p>
              </div>
              <div className="text-3xl">📊</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-lg text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Documents</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="text-3xl">📄</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-lg text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Projects</p>
                <p className="text-2xl font-bold">5</p>
              </div>
              <div className="text-3xl">🚀</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="text-sm text-gray-600">Profile updated</p>
                <span className="text-xs text-gray-400">2 hours ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="text-sm text-gray-600">New certificate added</p>
                <span className="text-xs text-gray-400">1 day ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <p className="text-sm text-gray-600">Project completed</p>
                <span className="text-xs text-gray-400">3 days ago</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">📄</span>
                  <span className="text-sm font-medium">Upload Document</span>
                </div>
              </button>
              <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">🎓</span>
                  <span className="text-sm font-medium">Add Education</span>
                </div>
              </button>
              <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">💼</span>
                  <span className="text-sm font-medium">Add Experience</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Profile Tab Component
function ProfileTab({ user }: { user: any }) {
  const [formData, setFormData] = useState({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || '',
    bio: '',
    location: '',
    website: '',
    linkedin: '',
    github: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update
    console.log('Profile updated:', formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tell us about yourself..."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="City, Country"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Website
            </label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://yourwebsite.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              LinkedIn
            </label>
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://linkedin.com/in/username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              GitHub
            </label>
            <input
              type="url"
              name="github"
              value={formData.github}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://github.com/username"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

// Education Tab Component
function EducationTab() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Education</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          Add Education
        </button>
      </div>
      
      <div className="space-y-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">Bachelor of Computer Science</h3>
              <p className="text-blue-600 font-medium">University of Technology</p>
              <p className="text-gray-600">2020 - 2024</p>
              <p className="text-gray-600 mt-2">GPA: 3.8/4.0</p>
              <p className="text-gray-600 mt-2">
                Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-400 hover:text-blue-600 transition">
                ✏️
              </button>
              <button className="p-2 text-gray-400 hover:text-red-600 transition">
                🗑️
              </button>
            </div>
          </div>
        </div>

        <div className="text-center py-8 text-gray-500">
          <div className="text-4xl mb-2">🎓</div>
          <p>Add your educational background to showcase your academic achievements</p>
        </div>
      </div>
    </div>
  );
}

// Experience Tab Component
function ExperienceTab() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          Add Experience
        </button>
      </div>
      
      <div className="space-y-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">Software Developer Intern</h3>
              <p className="text-blue-600 font-medium">Tech Solutions Inc.</p>
              <p className="text-gray-600">June 2023 - August 2023</p>
              <p className="text-gray-600 mt-2">
                Developed web applications using React and Node.js. Collaborated with senior developers 
                on feature implementation and bug fixes.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">JavaScript</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-400 hover:text-blue-600 transition">
                ✏️
              </button>
              <button className="p-2 text-gray-400 hover:text-red-600 transition">
                🗑️
              </button>
            </div>
          </div>
        </div>

        <div className="text-center py-8 text-gray-500">
          <div className="text-4xl mb-2">💼</div>
          <p>Add your work experience to highlight your professional journey</p>
        </div>
      </div>
    </div>
  );
}

// Projects Tab Component
function ProjectsTab() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          Add Project
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">E-commerce Platform</h3>
            <div className="flex space-x-2">
              <button className="p-1 text-gray-400 hover:text-blue-600 transition">
                ✏️
              </button>
              <button className="p-1 text-gray-400 hover:text-red-600 transition">
                🗑️
              </button>
            </div>
          </div>
          <p className="text-gray-600 mb-4">
            Full-stack e-commerce application with user authentication, product catalog, and payment integration.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">React</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Express</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">MongoDB</span>
          </div>
          <div className="flex space-x-3">
            <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View Live →
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-700 text-sm font-medium">
              GitHub →
            </a>
          </div>
        </div>

        <div className="text-center py-8 text-gray-500 border border-gray-200 rounded-lg">
          <div className="text-4xl mb-2">🚀</div>
          <p>Showcase your projects and achievements</p>
        </div>
      </div>
    </div>
  );
}

// Settings Tab Component
function SettingsTab({ user }: { user: any }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Email Notifications</h4>
                <p className="text-sm text-gray-600">Receive updates about your profile and activities</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Profile Visibility</h4>
                <p className="text-sm text-gray-600">Make your profile visible to recruiters</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Security</h3>
          <div className="space-y-4">
            <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <h4 className="font-medium text-gray-900">Change Password</h4>
              <p className="text-sm text-gray-600">Update your account password</p>
            </button>
            
            <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Data & Privacy</h3>
          <div className="space-y-4">
            <button className="w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <h4 className="font-medium text-gray-900">Download Data</h4>
              <p className="text-sm text-gray-600">Download a copy of your data</p>
            </button>
            
            <button className="w-full text-left p-4 border border-red-200 rounded-lg hover:bg-red-50 transition text-red-600">
              <h4 className="font-medium">Delete Account</h4>
              <p className="text-sm text-red-500">Permanently delete your account and all data</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}