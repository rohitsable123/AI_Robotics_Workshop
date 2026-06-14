import React from 'react';
import { Cpu } from 'lucide-react';

export const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-indigo-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="p-2 bg-brand-purple-500 rounded-xl text-white transform group-hover:rotate-12 transition-transform duration-300">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-brand-purple-900">
              Robo<span className="text-brand-orange-500">Camp</span>
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('details')}
              className="text-sm font-semibold text-brand-purple-900/70 hover:text-brand-purple-500 transition-colors"
            >
              Workshop Details
            </button>
            <button
              onClick={() => scrollToSection('outcomes')}
              className="text-sm font-semibold text-brand-purple-900/70 hover:text-brand-purple-500 transition-colors"
            >
              What You'll Learn
            </button>
            <button
              onClick={() => scrollToSection('faqs')}
              className="text-sm font-semibold text-brand-purple-900/70 hover:text-brand-purple-500 transition-colors"
            >
              FAQs
            </button>
          </nav>

          {/* CTA */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('register')}
              className="inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 border-b-4 border-brand-purple-700 bg-brand-purple-600 hover:bg-brand-purple-500 text-white font-display font-medium rounded-xl hover:translate-y-[-2px] active:translate-y-[2px] transition-all text-sm sm:text-base"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
