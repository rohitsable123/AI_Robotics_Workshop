import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Details } from './components/Details';
import { Outcomes } from './components/Outcomes';
import { FAQ } from './components/FAQ';
import { RegistrationForm } from './components/Form';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Banner */}
        <Hero />

        {/* Details Cards Grid */}
        <Details />

        {/* Learning Outcomes Checklist/Badges */}
        <Outcomes />

        {/* Registration Submission Form */}
        <RegistrationForm />

        {/* Collapsible FAQs Accordion */}
        <FAQ />
      </main>

      {/* Footer Branding & Links */}
      <Footer />
    </div>
  );
};

export default App;
