import React from 'react';
import imgManInHoodie from "figma:asset/18e1dc6eea793c1d5c5058dc1a1f741c3f223165.png";

export const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-24">
      {/* Left Column */}
      <div className="md:col-span-3 flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <div className="bg-[#dbdbdb] w-[202px] h-[178px] flex items-center justify-center relative">
            <span className="font-['Epilogue'] font-black text-[128px] tracking-[-0.05em] leading-none">07</span>
          </div>
          <div className="bg-[#c10014] text-white font-['Epilogue'] font-bold text-[10px] tracking-[0.2em] px-3 py-1.5 self-start">
            FWA OF THE DAY
          </div>
          <div className="text-[#5a6061] font-['Inter'] text-[10px] tracking-[0.1em] uppercase leading-relaxed">
            MAKE HERE ANOTHER TEXT<br />BLOCK
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <p className="font-['Newsreader'] text-[18px] text-[#2d3435] leading-relaxed max-w-[320px]">
            A generative synthesis of human perception and machine intelligence. Redefining the boundaries of digital curation through algorithmic precision.
          </p>
          <button className="bg-[#5e5e5e] text-[#f8f8f8] font-['Epilogue'] font-bold text-[11px] tracking-[0.2em] uppercase py-4 px-8 w-full transition-colors hover:bg-[#4a4a4a]">
            Launch Project
          </button>
        </div>
      </div>

      {/* Right Column (Hero Image) */}
      <div className="md:col-span-9 relative bg-[#ebeeef] overflow-hidden group">
        <div className="h-[627px] w-full">
           <img 
            alt="Oryzo AI Hero" 
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" 
            src={imgManInHoodie} 
          />
        </div>
        <div className="absolute bottom-12 left-12 right-12 flex flex-col gap-4">
          <h1 className="font-['Epilogue'] font-black text-[128px] text-white tracking-[-0.05em] leading-[0.9]">
            Oryzo AI
          </h1>
          <p className="font-['Newsreader'] italic text-[30px] text-white/90 leading-none">
            Powered by AI
          </p>
        </div>
      </div>
    </section>
  );
};
