import React from 'react';
import { services } from '../data/mockData';

export const Services: React.FC = () => {
    return (
        <div className="w-full animate-fade-up py-6 md:py-10">
            <div className="text-center mb-12 md:mb-20 relative px-4">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-64 md:h-64 bg-cyan-500/20 blur-[80px] md:blur-[100px] -z-10"></div>
                <h1 className="text-4xl md:text-7xl font-black mb-4 md:mb-6 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">خدمات <span className="text-cyan-400">متمایز</span> ما</h1>
                <p className="text-cyan-100/70 max-w-2xl mx-auto text-base md:text-lg font-light">تلفیقی از هنر، تکنولوژی و تجربه برای خلق آثاری ماندگار</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
                {services.map((service) => (
                    <div key={service.id} className="glass-panel p-6 md:p-8 rounded-[2rem] group flex flex-col h-full hover:z-10 transition-transform duration-300">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-white/10 to-transparent rounded-2xl flex items-center justify-center text-3xl md:text-4xl mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] border border-white/5 group-hover:border-cyan-400/30 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                            {service.icon}
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors drop-shadow-lg">{service.title}</h3>
                        <p className="text-gray-400 mb-6 md:mb-8 leading-relaxed text-sm flex-grow font-light">{service.desc}</p>
                        
                        <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                            {service.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-300 group-hover:text-white transition-colors">
                                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        
                        <button className="w-full py-3 md:py-4 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:bg-cyan-400 hover:border-cyan-400 hover:text-black transition-all duration-300 text-sm font-bold shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                            جزئیات بیشتر
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};