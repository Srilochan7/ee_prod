import React from 'react';
import { 
    Search, 
    Calendar, 
    Star, 
    Users, 
    BookOpen, 
    Code, 
    FileCheck, 
    ChevronRight, 
    ArrowRight, 
    Lightbulb, 
    BarChart, 
    MessageCircle, 
    BookMarked, 
    Target, 
    Coffee,
    GraduationCap,
    Brain,
    Trophy,
    Layout,
    PenTool,
    Monitor,
    UserCheck,
    Laptop,
    Clock,
    CheckCircle,
    Search as SearchIcon,
    Users as UsersIcon
  } from 'lucide-react';

const Features = () => {
  return (
    <section id='section2'>
    <section className="bg-gradient-to-b from-gray-50 to-white py-5 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Features</span>{' '}
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              ExpertEase is a platform that connects learners with mentors for personalized guidance and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Personalised Tracking</h3>
                <p className="text-gray-600">
                  Track your progress with personalized dashboards and AI-powered insights to optimize your learning journey.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Career Guidance</h3>
                <p className="text-gray-600">
                  Get expert career advice, industry insights, and personalized roadmaps to achieve your professional goals.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <UserCheck className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Mock Interviews / Resume Reviews</h3>
                <p className="text-gray-600">
                  Practice with industry experts and get detailed feedback on your interview skills and resume presentation.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Doubt Solving / Project collaboration</h3>
                <p className="text-gray-600">
                  Get real-time support for your queries and collaborate with mentors on hands-on projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>
  );
};

export default Features;