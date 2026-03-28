import React from 'react';

export const ConceptSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-24">
      {/* Label Column */}
      <div className="md:col-span-3">
        <div className="text-[#c10014] font-['Inter'] font-bold text-[10px] tracking-[0.3em] uppercase">
          01 — CONCEPT
        </div>
      </div>

      {/* Main Column */}
      <div className="md:col-span-9 flex flex-col gap-20">
        {/* Stats */}
        <div className="flex gap-16 border-b border-[#adb3b4]/20 pb-4 w-fit">
          <div className="flex items-end gap-6">
            <span className="text-[#5a6061] font-['Inter'] font-bold text-[10px] tracking-[0.3em] uppercase mb-3">POINTS</span>
            <span className="text-[#2d3435] font-['Epilogue'] font-black text-[60px] tracking-[-0.05em] leading-none">90</span>
          </div>
          <div className="flex items-end gap-6">
            <span className="text-[#5a6061] font-['Inter'] font-bold text-[10px] tracking-[0.3em] uppercase mb-3">DAYS</span>
            <span className="text-[#2d3435] font-['Epilogue'] font-black text-[60px] tracking-[-0.05em] leading-none">2</span>
          </div>
        </div>

        {/* Big Text */}
        <h2 className="text-[#2d3435] font-['Epilogue'] font-bold text-[72px] tracking-[-0.05em] leading-[1.05] max-w-[896px]">
          The intersection of neural networks and editorial design.
        </h2>
      </div>
    </section>
  );
};
