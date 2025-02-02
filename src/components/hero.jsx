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

const Hero = () => {
  return (
    <section id='section1'>
    <div className="min-h-screen bg-gray-50">
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .animate-float-delayed {
            animation: float 3s ease-in-out infinite;
            animation-delay: 1.5s;
          }
        `}
      </style>
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pb-1">
        {/* Simplified Grid Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_2px,transparent_2px),linear-gradient(to_bottom,#e5e7eb_2px,transparent_2px)] bg-[size:4rem_4rem] opacity-33"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Academic/Learning Elements - Left Side */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center animate-float">
            <GraduationCap className="w-8 h-8 text-blue-600" />
          </div>
          <div className="absolute top-40 left-1/4 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center animate-float-delayed">
            <Brain className="w-6 h-6 text-green-600" />
          </div>
          <div className="absolute bottom-32 left-20 w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center animate-float">
            <Trophy className="w-7 h-7 text-yellow-600" />
          </div>

          {/* Tech/Development Elements - Right Side */}
          <div className="absolute top-24 right-16 w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center animate-float-delayed">
            <Layout className="w-8 h-8 text-purple-600" />
          </div>
          <div className="absolute top-48 right-1/4 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center animate-float">
            <Code className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="absolute bottom-40 right-20 w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center animate-float-delayed">
            <PenTool className="w-7 h-7 text-red-600" />
          </div>

          {/* Center Elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-20">
            <div className="w-20 h-20 bg-blue-900/5 rounded-full blur-xl"></div>
            <div className="w-20 h-20 bg-purple-900/5 rounded-full blur-xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 pt-20 pb-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Expert Mentorship
              <br />
              <span className="relative inline-block">
                That Delivers Results
                <div className="absolute bottom-2 left-0 w-full h-2 bg-yellow-400/80"></div>
              </span>
            </h1>

            {/* Waitlist Section */}
            <div className="max-w-2xl mx-auto mt-15">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Waitlist</h2>
                <p className="text-gray-600 text-base md:text-lg mb-8">
                  Sign up to be the first to know when we launch. We'll notify you as soon as we're ready to go live. (For both Mentors & Learners)
                </p>
                <div className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-full bg-black/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-md">
                    Join Waitlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </section>
  );
};

export default Hero;