import React from 'react';
import { HeroSection } from './components/HeroSection';
import { ConceptSection } from './components/ConceptSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col font-sans text-[#2d3435]">
      {/* Main Container */}
      <main className="flex-1 w-full max-w-[1600px] mx-auto px-8 pt-12 md:pt-20">
        <HeroSection />
        <ConceptSection />
      </main>

      {/* Footer (Full Width) */}
      <Footer />
    </div>
  );
}

export default App;
