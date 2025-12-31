import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/mockData';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden mb-12 py-24 md:py-20 px-4">
      
      {/* Dynamic Lighting Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-glow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold-500/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[90%] md:w-[800px] h-[100px] bg-cyan-400/5 rotate-45 blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto animate-fade-up">
        
        {/* Main Glass Card */}
        <div className="glass-panel rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 border border-white/5 relative group mx-2 md:mx-0">
            {/* Inner Light Beam */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/30 text-cyan-300 text-xs font-bold mb-6 md:mb-8 shadow-[0_0_15px_rgba(34,211,238,0.1)] backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                نسل جدید خدمات چاپ
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black mb-6 md:mb-8 leading-tight tracking-tighter font-sans relative z-10">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-50 to-cyan-300 drop-shadow-[0_0_30px_rgba(34,211,238,0.25)] block">
                {siteConfig.name}
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 mb-8 md:mb-10 opacity-80 scale-75 md:scale-100">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-400"></div>
                <div className="w-2 h-2 rotate-45 bg-gold-400 shadow-[0_0_10px_#fbbf24]"></div>
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-400"></div>
            </div>

            <p className="text-lg md:text-3xl text-gray-200 mb-8 md:mb-12 font-light tracking-wide md:text-glow leading-relaxed px-2">
              {siteConfig.slogan}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full">
                 <Link to="/contact" className="w-full sm:w-auto relative px-8 py-4 rounded-2xl bg-cyan-400 text-cyan-950 font-bold overflow-hidden group transition-transform hover:scale-105 shadow-[0_0_40px_rgba(34,211,238,0.4)]">
                    <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                    <span className="relative z-10">شروع همکاری</span>
                 </Link>
                 <Link to="/services" className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-md">
                    خدمات ما
                 </Link>
            </div>
        </div>

      </div>
    </section>
  );
};