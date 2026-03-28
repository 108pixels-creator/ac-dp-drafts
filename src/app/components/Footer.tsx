import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#fafafa] py-20 px-8 mt-auto">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Brand & Rights */}
        <div className="flex flex-col gap-4">
          <div className="font-['Epilogue'] font-bold text-[16px] tracking-[-0.05em] uppercase text-[#171717]">
            STUDIO.EDIT
          </div>
          <div className="font-['Epilogue'] text-[12px] tracking-[0.1em] uppercase text-[#737373]">
            ©2024 STUDIO.EDIT — ALL RIGHTS RESERVED
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-16">
          {/* Social */}
          <div className="flex flex-col gap-3">
            <span className="font-['Inter'] text-[10px] tracking-[0.1em] uppercase text-[#a3a3a3] mb-1">Social</span>
            <a href="#" className="font-['Epilogue'] text-[12px] tracking-[0.1em] uppercase text-[#737373] hover:text-[#171717] transition-colors">Instagram</a>
            <a href="#" className="font-['Epilogue'] text-[12px] tracking-[0.1em] uppercase text-[#737373] hover:text-[#171717] transition-colors">Are.na</a>
            <a href="#" className="font-['Epilogue'] text-[12px] tracking-[0.1em] uppercase text-[#737373] hover:text-[#171717] transition-colors">LinkedIn</a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <span className="font-['Inter'] text-[10px] tracking-[0.1em] uppercase text-[#a3a3a3] mb-1">Contact</span>
            <a href="mailto:hello@studio.edit" className="font-['Epilogue'] text-[12px] tracking-[0.1em] uppercase text-[#171717] underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity">
              hello@studio.edit
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
