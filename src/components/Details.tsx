import React from 'react';
import { Users, Clock, Monitor, IndianRupee, Calendar } from 'lucide-react';

interface DetailCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtext: string;
  borderColor: string;
  bgColor: string;
  iconBgColor: string;
  textColor: string;
}

const DetailCard: React.FC<DetailCardProps> = ({
  icon,
  title,
  value,
  subtext,
  borderColor,
  bgColor,
  iconBgColor,
  textColor,
}) => {
  return (
    <div className={`p-6 rounded-3xl ${bgColor} border-2 ${borderColor} shadow-sm hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-4px] flex flex-col items-center text-center group`}>
      <div className={`p-4 ${iconBgColor} ${textColor} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <span className="text-sm font-semibold uppercase tracking-wider text-brand-purple-900/40 mb-1">{title}</span>
      <span className="font-display text-2xl font-bold text-brand-purple-900 mb-2">{value}</span>
      <p className="text-sm text-brand-purple-900/60 leading-normal">{subtext}</p>
    </div>
  );
};

export const Details: React.FC = () => {
  const cards = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Age Group",
      value: "8–14 Years",
      subtext: "Designed specifically for school students to grasp complex concepts easily.",
      borderColor: "border-brand-teal-400/30 hover:border-brand-teal-500",
      bgColor: "bg-brand-teal-50/20",
      iconBgColor: "bg-brand-teal-50",
      textColor: "text-brand-teal-600",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Duration",
      value: "4 Weeks",
      subtext: "12 interactive sessions (3 sessions/week) packed with coding and hands-on builds.",
      borderColor: "border-brand-orange-400/30 hover:border-brand-orange-500",
      bgColor: "bg-brand-orange-50/20",
      iconBgColor: "bg-brand-orange-50",
      textColor: "text-brand-orange-600",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Mode",
      value: "Online",
      subtext: "Live interactive classes via Zoom + browser-based web simulation toolkits.",
      borderColor: "border-brand-pink-400/30 hover:border-brand-pink-500",
      bgColor: "bg-brand-pink-50/20",
      iconBgColor: "bg-brand-pink-50",
      textColor: "text-brand-pink-600",
    },
    {
      icon: <IndianRupee className="w-8 h-8" />,
      title: "Fee",
      value: "₹2,999",
      subtext: "One-time fee including digital kits, lifetime platform access & certification.",
      borderColor: "border-brand-purple-400/30 hover:border-brand-purple-500",
      bgColor: "bg-brand-purple-50/20",
      iconBgColor: "bg-brand-purple-50",
      textColor: "text-brand-purple-600",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Start Date",
      value: "15 July 2026",
      subtext: "Registrations close 3 days prior. Limited batches for personalized feedback.",
      borderColor: "border-brand-yellow-400/30 hover:border-brand-yellow-500",
      bgColor: "bg-brand-yellow-100/10",
      iconBgColor: "bg-brand-yellow-100",
      textColor: "text-brand-yellow-600",
    },
  ];

  return (
    <section id="details" className="py-20 bg-stone-50 border-t border-brand-purple-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-purple-900 mb-4">
            Workshop Information at a Glance
          </h2>
          <div className="h-1.5 w-24 bg-brand-orange-500 rounded-full mx-auto mb-4" />
          <p className="text-lg text-brand-purple-900/60 leading-relaxed font-light">
            Everything you need to know about our upcoming cohort. Handcrafted to turn screen time into active learning.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className={idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
              <DetailCard {...card} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
