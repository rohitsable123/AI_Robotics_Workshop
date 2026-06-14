import React from 'react';
import { Cpu, Bot, Code, Lightbulb, Share2, Award } from 'lucide-react';

interface OutcomeItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
  bgClass: string;
}

const OutcomeCard: React.FC<OutcomeItemProps> = ({ icon, title, description, colorClass, bgClass }) => {
  return (
    <div className="flex gap-4 p-6 rounded-2xl bg-white border border-brand-purple-50 hover:shadow-lg transition-shadow">
      <div className={`p-3 rounded-xl shrink-0 h-fit ${bgClass} ${colorClass}`}>
        {icon}
      </div>
      <div>
        <h3 className="font-display text-xl font-bold text-brand-purple-900 mb-2">{title}</h3>
        <p className="text-brand-purple-900/60 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export const Outcomes: React.FC = () => {
  const outcomes = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Basics of AI & Smart Systems",
      description: "Understand how smart machines think! Learn face recognition, text translations, and how voice assistants process commands.",
      colorClass: "text-brand-purple-500",
      bgClass: "bg-brand-purple-50",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Virtual Robotics Simulation",
      description: "Build, configure, and code mechanical robots in virtual simulators. Test sensors, wheels, and arms without physical kits.",
      colorClass: "text-brand-orange-500",
      bgClass: "bg-brand-orange-50",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Core Programming Logic",
      description: "Learn how to build algorithms using blocks and visual structures. Transition seamlessly into writing lines of clean python code.",
      colorClass: "text-brand-teal-500",
      bgClass: "bg-brand-teal-50",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Creative Problem Solving",
      description: "Learn logical debugging. Figure out why coding scripts crash, fix errors, and invent custom solution strategies.",
      colorClass: "text-brand-pink-500",
      bgClass: "bg-brand-pink-50",
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Teamwork & Project Pitching",
      description: "Collaborate in group events. Brainstorm coding projects together and pitch robot designs to peers on final presentations.",
      colorClass: "text-brand-yellow-600",
      bgClass: "bg-brand-yellow-100/50",
    },
  ];

  return (
    <section id="outcomes" className="py-20 bg-gradient-to-b from-stone-50 via-white to-stone-50/20 border-t border-brand-purple-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-purple-900 mb-4">
            What Your Child Will Take Away
          </h2>
          <div className="h-1.5 w-24 bg-brand-teal-500 rounded-full mx-auto mb-4" />
          <p className="text-lg text-brand-purple-900/60 leading-relaxed font-light">
            We don't just teach children how to consume technology. We empower them to build it from scratch.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {outcomes.map((item, idx) => (
            <div key={idx} className={idx === 4 ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none" : ""}>
              <OutcomeCard {...item} />
            </div>
          ))}
          
          {/* Fun Reward Badge Card */}
          <div className="flex flex-col justify-center items-center text-center p-6 rounded-2xl bg-gradient-to-br from-brand-purple-500 to-brand-pink-500 text-white border border-brand-purple-600 shadow-md">
            <Award className="w-12 h-12 mb-4 text-brand-yellow-400 animate-bounce" />
            <h3 className="font-display text-xl font-bold mb-2">Explorer Certificate</h3>
            <p className="text-white/80 text-sm max-w-xs leading-relaxed">
              Every graduate receives a formal verifiable digital certificate showing completed projects and badges!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
