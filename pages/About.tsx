import React from 'react';
import { stats, siteConfig } from '../data/mockData';

export const About: React.FC = () => {
    return (
        <div className="w-full animate-fade-up py-10">
            
            {/* Main Content */}
            <div className="glass-panel p-8 md:p-16 rounded-[3rem] text-center mb-12 relative overflow-hidden mt-4 mx-4 border border-cyan-400/20">
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px]"></div>
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"></div>
                
                <h1 className="text-4xl md:text-5xl font-black mb-8 relative z-10 text-white">درباره <span className="text-cyan-400">{siteConfig.name}</span></h1>
                
                <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300 font-light leading-loose relative z-10 text-justify md:text-center">
                    <p>
                        ما ترکیبی از <span className="text-gold-400 font-bold">هنر</span> و <span className="text-cyan-400 font-bold">صنعت</span> هستیم.
                        از سال ۱۳۸۵، ماموریت ما فراتر از چاپ روی کاغذ بوده است؛ ما به ایده‌ها جان می‌بخشیم.
                    </p>
                    <p>
                        با بهره‌گیری از پیشرفته‌ترین ماشین‌آلات هایدلبرگ و تیمی متشکل از طراحان خلاق و مهندسین چاپ، 
                        ما استانداردهای جدیدی را در صنعت چاپ و بسته‌بندی کشور تعریف کرده‌ایم. 
                        تعهد ما به کیفیت، دقت و زمان‌بندی، ما را به شریک مورد اعتماد بزرگترین برندهای ایران تبدیل کرده است.
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 px-4">
                {stats.map((stat, idx) => (
                    <div key={idx} className="glass-panel p-8 rounded-3xl text-center hover:bg-cyan-900/30 transition-all duration-300 group border border-white/5 hover:border-gold-400/40">
                        <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-4 group-hover:from-gold-300 group-hover:to-gold-600 transition-all filter drop-shadow-lg">
                            {stat.number}
                        </div>
                        <div className="text-sm text-cyan-200/60 font-medium tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>

             {/* Vision/Mission */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mb-8">
                <div className="glass-panel p-10 rounded-3xl border-r-4 border-r-cyan-400 hover:bg-white/5 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="text-3xl">🚀</span> ماموریت ما
                    </h3>
                    <p className="text-gray-400 leading-7 text-justify">
                        ارائه خدمات چاپ با بالاترین کیفیت جهانی و قیمت رقابتی، ضمن رعایت اصول زیست‌محیطی و استفاده از متریال‌های دوستدار طبیعت.
                    </p>
                </div>
                <div className="glass-panel p-10 rounded-3xl border-r-4 border-r-gold-400 hover:bg-white/5 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="text-3xl">👁️</span> چشم‌انداز
                    </h3>
                    <p className="text-gray-400 leading-7 text-justify">
                        تبدیل شدن به قطب اصلی صنعت چاپ و بسته‌بندی هوشمند در خاورمیانه تا سال ۱۴۱۰ و صادرات خدمات به کشورهای همسایه.
                    </p>
                </div>
             </div>
        </div>
    );
};