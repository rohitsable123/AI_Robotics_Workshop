import React from 'react';
import { ArrowRight, Sparkles, Bot, Rocket, Code, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollToForm = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-purple-50/40 to-brand-purple-50/20 pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-32">
      {/* Background Dot Grid for Tech Feel */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Background blobs for playful design */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-purple-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-brand-orange-100/40 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-[300px] h-[300px] bg-brand-teal-100/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Tag/Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-purple-100 text-brand-purple-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <Sparkles className="w-4 h-4 text-brand-orange-500 animate-spin" style={{ animationDuration: '3s' }} />
              <span>⚡ Ultimate Summer Camp for Future Innovators</span>
            </div>

            {/* Title */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-brand-purple-900 leading-tight tracking-tight mb-6">
              AI & Robotics <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-600 via-brand-pink-500 to-brand-orange-500">
                Summer Workshop
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-lg sm:text-xl text-brand-purple-900/70 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-light">
              A 4-week hands-on learning adventure for kids aged 8–14. Dive into the world of Artificial Intelligence, code virtual robots, and build cool projects while having tons of fun!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={handleScrollToForm}
                className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-orange-500 to-brand-pink-500 hover:from-brand-orange-600 hover:to-brand-pink-600 text-white font-display text-lg font-bold rounded-2xl border-b-4 border-brand-orange-700 hover:translate-y-[-2px] active:translate-y-[1px] hover:shadow-lg hover:shadow-brand-orange-500/20 active:shadow-none transition-all cursor-pointer"
              >
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('details');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-brand-purple-50 text-brand-purple-900 font-display text-lg font-bold rounded-2xl border-2 border-brand-purple-100 hover:border-brand-purple-200 transition-colors"
              >
                Learn More
              </button>
            </div>

            {/* Badges Grid */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-brand-purple-100/60 pt-8 max-w-md mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-bold text-brand-purple-900">Ages 8-14</p>
                <p className="text-xs text-brand-purple-900/60 font-medium mt-1">Perfect Fit</p>
              </div>
              <div className="border-x border-brand-purple-100/60">
                <p className="text-2xl font-bold text-brand-purple-900">100%</p>
                <p className="text-xs text-brand-purple-900/60 font-medium mt-1">Hands-On</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-purple-900">Zero</p>
                <p className="text-xs text-brand-purple-900/60 font-medium mt-1">Coding Exp Req.</p>
              </div>
            </div>
          </div>

          {/* Right Graphics Column */}
          <div className="lg:col-span-5 flex justify-center relative py-8">
            {/* Spinning Orbit Ring behind Robot */}
            <div className="absolute inset-0 max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-square rounded-full border-2 border-dashed border-brand-purple-300/40 animate-spin mx-auto self-center pointer-events-none" style={{ animationDuration: '30s' }} />

            {/* Playful Floating Robot Graphic */}
            <div className="relative w-72 sm:w-80 lg:w-96 aspect-square bg-gradient-to-tr from-brand-purple-100 to-brand-pink-50 rounded-full flex items-center justify-center p-8 shadow-inner animate-float-slow">
              
              {/* Core robot graphics using SVG */}
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                {/* Robot Body */}
                <rect x="55" y="80" width="90" height="80" rx="20" fill="#6366F1" />
                <rect x="65" y="90" width="70" height="60" rx="12" fill="#E0E7FF" />
                
                {/* Robot Head */}
                <rect x="70" y="30" width="60" height="40" rx="15" fill="#4F46E5" />
                <rect x="78" y="38" width="44" height="24" rx="10" fill="#1E1B4B" />
                
                {/* Robot Eyes (Glowing screen) */}
                <circle cx="90" cy="50" r="4" fill="#2DD4BF" className="animate-pulse" />
                <circle cx="110" cy="50" r="4" fill="#2DD4BF" className="animate-pulse" />
                
                {/* Robot Antenna */}
                <line x1="100" y1="30" x2="100" y2="15" stroke="#4F46E5" strokeWidth="4" />
                <circle cx="100" cy="12" r="6" fill="#F97316" />
                
                {/* Robot Limbs */}
                <rect x="43" y="100" width="12" height="40" rx="6" fill="#4F46E5" />
                <rect x="145" y="100" width="12" height="40" rx="6" fill="#4F46E5" />
                <rect x="75" y="160" width="16" height="15" rx="5" fill="#1E1B4B" />
                <rect x="109" y="160" width="16" height="15" rx="5" fill="#1E1B4B" />
                
                {/* Robot Neck */}
                <rect x="90" y="70" width="20" height="10" fill="#1E1B4B" />
                
                {/* Smile / Code line */}
                <path d="M 92 58 Q 100 64 108 58" fill="none" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" />
              </svg>

              {/* Floating badges around the robot */}
              {/* Badge 1: AI (Top-Left) */}
              <div className="absolute top-4 -left-6 bg-white p-3 rounded-2xl shadow-xl flex items-center space-x-2 border border-brand-purple-50 animate-float-fast">
                <div className="p-1.5 bg-brand-teal-500 rounded-lg text-white">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="font-display font-bold text-sm text-brand-purple-900">AI Logic</span>
              </div>

              {/* Badge 2: Python (Top-Right) */}
              <div className="absolute -top-6 -right-4 bg-white p-3 rounded-2xl shadow-xl flex items-center space-x-2 border border-brand-purple-50 animate-float-slow" style={{ animationDelay: '0.5s' }}>
                <div className="p-1.5 bg-brand-yellow-500 rounded-lg text-white">
                  <Code className="w-5 h-5" />
                </div>
                <span className="font-display font-bold text-sm text-brand-purple-900">Python</span>
              </div>

              {/* Badge 3: Certificates (Bottom-Left) */}
              <div className="absolute -bottom-6 -left-4 bg-white p-3 rounded-2xl shadow-xl flex items-center space-x-2 border border-brand-purple-50 animate-float-fast" style={{ animationDelay: '1.5s' }}>
                <div className="p-1.5 bg-brand-purple-500 rounded-lg text-white">
                  <Award className="w-5 h-5" />
                </div>
                <span className="font-display font-bold text-sm text-brand-purple-900">Certificates</span>
              </div>

              {/* Badge 4: Fun Quizzes (Bottom-Right) */}
              <div className="absolute bottom-4 -right-6 bg-white p-3 rounded-2xl shadow-xl flex items-center space-x-2 border border-brand-purple-50 animate-float-slow" style={{ animationDelay: '1s' }}>
                <div className="p-1.5 bg-brand-orange-500 rounded-lg text-white">
                  <Rocket className="w-5 h-5" />
                </div>
                <span className="font-display font-bold text-sm text-brand-purple-900">Simulators</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
