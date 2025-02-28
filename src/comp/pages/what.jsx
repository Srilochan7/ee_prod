import React from "react";
import { 
  BarChart, 
  GraduationCap,
  UserCheck,
  MessageCircle
} from 'lucide-react';

const What = () => {
  const features = [
    {
      icon: BarChart,
      title: "Personalised Tracking",
      description: "Track your progress with personalized mentors and gain insights to optimize your learning journey.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Career Guidance",
      description: "Get expert career advice, industry insights, and personalized roadmaps to achieve your professional goals.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: UserCheck,
      title: "Mock Interviews / Resume Reviews",
      description: "Practice with industry experts and get detailed feedback on your interview skills and resume presentation.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: MessageCircle,
      title: "Doubt Solving / Project collaboration",
      description: "Get real-time support for your queries and collaborate with mentors on hands-on projects.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section id="section5" className="relative overflow-hidden">
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-400 to-white px-4 py-16 md:py-5">
        <div className="max-w-7xl w-full">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-50 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />

          {/* Main content container */}
          <div className="relative bg-white backdrop-blur-sm bg-opacity-90 shadow-xl rounded-3xl p-6 md:p-12 text-center">
            {/* Header section */}
            <div className="max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-clip-text ">
                What is ExpertEase?
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                ExpertEase is a mentorship platform that connects learners with experienced mentors
                for <span className="font-semibold text-gray-800">doubt clarification, mock interviews, resume reviews, project collaboration,</span> and more. 
                Our goal is to make mentorship easily accessible, helping individuals grow with expert guidance.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-white border-t-2 border-slate-200 rounded-2xl p-6 shadow-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center">
                    <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default What;