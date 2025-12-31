import React from 'react';
import { projects } from '../data/mockData';

export const Portfolio: React.FC = () => {
    return (
        <div className="w-full animate-fade-up py-6 md:py-10">
            <div className="text-center mb-12 md:mb-20 relative px-4">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-64 md:h-64 bg-gold-500/10 blur-[80px] md:blur-[100px] -z-10"></div>
                <h1 className="text-4xl md:text-7xl font-black mb-4 md:mb-6 text-white drop-shadow-lg">نمونه <span className="text-gold-400">آثار</span> ما</h1>
                <p className="text-gray-400 text-sm md:text-base">آرشیوی از خلاقیت و کیفیت چاپ</p>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8 px-4">
                {projects.map((project) => (
                    <div key={project.id} className="break-inside-avoid glass-panel gold-hover p-2 rounded-[1.5rem] md:rounded-[2rem] group cursor-pointer hover:z-10 mb-6 md:mb-0">
                        <div className="relative rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden">
                            <img 
                                src={project.img} 
                                alt={project.title} 
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
                                <span className="text-gold-400 text-xs font-bold tracking-[0.2em] uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {project.cat}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                    {project.title}
                                </h3>
                                <div className="w-full h-[1px] bg-white/20 mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-150 origin-left"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-12 md:mt-20 text-center px-4">
                <button className="w-full md:w-auto px-10 py-4 rounded-full border border-white/20 text-white hover:bg-gold-500 hover:border-gold-500 hover:text-black transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                    مشاهده آرشیو کامل
                </button>
            </div>
        </div>
    );
};