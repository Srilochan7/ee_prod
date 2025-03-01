import React from 'react';
import { 
    BarChart, 
    GraduationCap, 
    UserCheck, 
    MessageCircle
} from 'lucide-react';

const Features = () => {
  return (
    <section id='features' className="bg-gradient-to-b from-gray-50 to-white py-12 px-4 md:px-0">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Features</h2>
        <p className="text-gray-600 text-lg mb-12">
          ExpertEase is a platform that connects learners with mentors for personalized guidance and growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature Cards */}
          {featuresData.map(({ icon: Icon, title, description, color, bgColor }, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const featuresData = [
  {
    icon: BarChart,
    title: "Personalised Tracking",
    description: "Track your progress with AI-powered insights to optimize your learning journey.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: GraduationCap,
    title: "Career Guidance",
    description: "Get expert career advice and personalized roadmaps to achieve your goals.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: UserCheck,
    title: "Mock Interviews & Resume Reviews",
    description: "Practice with experts and get detailed feedback on your interview and resume.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    icon: MessageCircle,
    title: "Doubt Solving & Project Collaboration",
    description: "Get real-time support and collaborate with mentors on hands-on projects.",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
];

export default Features;