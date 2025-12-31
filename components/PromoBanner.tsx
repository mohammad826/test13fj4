import React from 'react';

export const PromoBanner: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto mt-16 mb-8 px-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
      <div className="glass-panel w-full rounded-[1.5rem] p-[1px] relative overflow-hidden group">
        
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        
        <div className="relative bg-[#050b14]/90 backdrop-blur-2xl rounded-[1.5rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5">
            
            <div className="flex items-center gap-6 w-full md:w-auto">
                <div className="relative w-16 h-16 shrink-0 hidden sm:flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] group-hover:scale-110 transition-transform duration-500">
                    <span className="text-3xl animate-pulse">⚡</span>
                </div>
                
                <div className="text-center sm:text-right flex-1">
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-wider">DEVELOPER</span>
                        <h3 className="text-xl font-bold text-white">طراحی و کدنویسی این وب‌سایت</h3>
                    </div>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">
                        آیا از کیفیت و طراحی این سایت لذت می‌برید؟ برای سفارش پروژه اختصاصی خود با تیم فنی ما در ارتباط باشید.
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                 <a href="tel:+9902251231" className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-white/5 hover:bg-cyan-500 hover:text-black border border-white/10 transition-all duration-300 group/btn">
                    <span className="text-lg group-hover/btn:scale-110 transition-transform">📱</span>
                    <span className="font-mono dir-ltr font-bold text-sm md:text-base">جهت پیام به تلگرام</span>
                 </a>
                 <div className="hidden sm:block w-[1px] h-8 bg-white/10"></div>
                 <a href="tel:0302800880" className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-white/5 hover:bg-gold-500 hover:text-black border border-white/10 transition-all duration-300 group/btn">
                    <span className="text-lg group-hover/btn:scale-110 transition-transform">☎️</span>
                    <span className="font-mono dir-ltr font-bold text-sm md:text-base">+98 09196728339</span>
                 </a>
            </div>

        </div>
      </div>
    </section>
  );
};