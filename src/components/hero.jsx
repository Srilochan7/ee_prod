import React, { useState } from 'react';
import { 
  GraduationCap,
  Brain,
  Trophy,
  Layout,
  PenTool,
  Code
} from 'lucide-react';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter an email address.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:3000/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email }),
        credentials: 'include' // Include credentials if you're using sessions
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setEmail(''); // Clear the input on success
      } else {
        throw new Error(result.error || "Failed to join waitlist");
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
          {/* Grid Pattern - Responsive */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] opacity-50"></div>
          </div>

          {/* Floating Elements - Mobile Optimized */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Academic/Learning Elements - Adjusted for Mobile */}
            <div className="absolute top-10 left-4 md:top-20 md:left-10 w-10 h-10 md:w-16 md:h-16 bg-blue-100 rounded-lg flex items-center justify-center animate-float">
              <GraduationCap className="w-5 h-5 md:w-8 md:h-8 text-blue-600" />
            </div>
            <div className="absolute top-24 left-1/5 md:top-40 md:left-1/4 w-8 h-8 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center animate-float-delayed">
              <Brain className="w-4 h-4 md:w-6 md:h-6 text-green-600" />
            </div>
            <div className="hidden md:flex absolute bottom-32 left-20 w-14 h-14 bg-yellow-100 rounded-lg items-center justify-center animate-float">
              <Trophy className="w-7 h-7 text-yellow-600" />
            </div>

            {/* Tech/Development Elements - Adjusted for Mobile */}
            <div className="absolute top-12 right-4 md:top-24 md:right-16 w-10 h-10 md:w-16 md:h-16 bg-purple-100 rounded-lg flex items-center justify-center animate-float-delayed">
              <Layout className="w-5 h-5 md:w-8 md:h-8 text-purple-600" />
            </div>
            <div className="absolute top-32 right-1/5 md:top-48 md:right-1/4 w-8 h-8 md:w-12 md:h-12 bg-indigo-100 rounded-lg flex items-center justify-center animate-float">
              <Code className="w-4 h-4 md:w-6 md:h-6 text-indigo-600" />
            </div>
            <div className="hidden md:flex absolute bottom-40 right-20 w-14 h-14 bg-red-100 rounded-lg items-center justify-center animate-float-delayed">
              <PenTool className="w-7 h-7 text-red-600" />
            </div>

            {/* Center Elements - Adjusted for Mobile */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-10 md:gap-20">
              <div className="w-12 h-12 md:w-20 md:h-20 bg-blue-900/5 rounded-full blur-xl"></div>
              <div className="w-12 h-12 md:w-20 md:h-20 bg-purple-900/5 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Main Content - Mobile Responsive */}
          <div className="container mx-auto px-4 md:px-6 pt-12 md:pt-20 pb-16 md:pb-32 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight text-gray-900">
                Expert Mentorship
                <br />
                <span className="relative inline-block">
                  That Delivers Results
                  <div className="absolute bottom-1 md:bottom-2 left-0 w-full h-1 md:h-2 bg-yellow-400/80"></div>
                </span>
              </h1>

              {/* Waitlist Section - Mobile Optimized */}
              <div className="max-w-2xl mx-auto mt-15">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Waitlist</h2>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          Sign up to be the first to know when we launch.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-6 py-4 rounded-full bg-black/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          />
          <button 
            type="submit"
            className="relative inline-flex overflow-hidden rounded-full bg-white px-8 py-3 
              text-base font-medium text-black shadow-lg 
              transition-all duration-300 ease-in-out
              hover:text-white
              disabled:opacity-50 disabled:cursor-not-allowed
              before:absolute before:inset-0 
              before:z-0 before:translate-x-[-100%] before:bg-gray-900
              before:transition-transform before:duration-300 before:ease-in-out
              hover:before:translate-x-0"
            disabled={loading}
          >
            <span className="relative z-10">
              {loading ? "Processing..." : "Join Waitlist"}
            </span>
          </button>
        </form>
        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}
        {success && (
          <p className="text-green-500 text-sm mt-2">
            Successfully joined the waitlist! We'll be in touch soon.
          </p>
        )}
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