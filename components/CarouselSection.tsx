import React from 'react';
import { carouselImages } from '../data/mockData';

export const CarouselSection: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto mb-12 px-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <div className="glass-panel w-full rounded-[2rem] p-4 md:p-8">
            <div className="flex gap-6 overflow-x-auto pb-4 pt-2 px-2 scrollbar-hide snap-x">
                {carouselImages.map((img) => (
                    <div key={img.id} className="relative flex-shrink-0 w-full md:w-[300px] h-48 md:h-56 rounded-2xl overflow-hidden group cursor-pointer snap-center shadow-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                        <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/90 via-transparent to-transparent flex flex-col justify-end p-6">
                            <span className="text-white font-bold text-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{img.title}</span>
                            <div className="h-0.5 w-0 group-hover:w-full bg-gold-400 mt-2 transition-all duration-500"></div>
                        </div>
                    </div>
                ))}
                {/* Intro Card */}
                 <div className="relative flex-shrink-0 w-full md:w-[300px] h-48 md:h-56 rounded-2xl overflow-hidden group cursor-pointer snap-center bg-gradient-to-br from-cyan-900/50 to-black/50 border border-cyan-500/30 flex items-center justify-center p-6 text-center">
                    <div>
                        <h3 className="text-2xl font-bold text-cyan-300 mb-2">گالری تصاویر</h3>
                        <p className="text-sm text-gray-400">برای مشاهده تمام پروژه‌ها کلیک کنید</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};