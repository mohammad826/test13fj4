import React from 'react';
import { Link } from 'react-router-dom';

const gridItems = [
    {
        title: "خدمات ما",
        icon: "📜",
        desc: "مشاهده تمام خدمات",
        link: "/services",
        items: ["چاپ افست", "چاپ دیجیتال", "بسته‌بندی", "هدایای تبلیغاتی"]
    },
    {
        title: "نمونه کارها",
        icon: "🖼️",
        desc: "گالری پروژه‌ها",
        link: "/portfolio",
        items: ["کاتالوگ", "کارت ویزیت", "جعبه", "بنر"]
    },
    {
        title: "درباره ما",
        icon: "👤",
        desc: "داستان ما",
        link: "/about",
        items: ["تاریخچه", "تیم ما", "تجهیزات", "اهداف"]
    },
    {
        title: "تماس با ما",
        icon: "📞",
        desc: "راه‌های ارتباطی",
        link: "/contact",
        items: ["مشاوره رایگان", "پشتیبانی", "آدرس", "شبکه‌های اجتماعی"]
    }
];

export const InfoGrid: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto mb-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {gridItems.map((item, index) => (
             <Link to={item.link} key={index} className="glass-panel rounded-[2rem] p-8 group flex flex-col items-center text-center hover:bg-white/5">
                <div className="w-full flex justify-between items-center mb-6 border-b border-white/5 pb-4 group-hover:border-cyan-400/20 transition-colors">
                    <span className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{item.title}</span>
                    <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform">{item.icon}</span>
                </div>
                
                <ul className="w-full space-y-3 mb-8 text-right flex-grow">
                    {item.items.map((subItem, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-center gap-3 group-hover:text-gray-200 transition-colors">
                             <span className="w-1 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full opacity-50 group-hover:opacity-100 transition-opacity w-full max-w-[10px]"></span>
                             {subItem}
                        </li>
                    ))}
                </ul>

                <div className="w-full py-3 rounded-xl bg-black/20 group-hover:bg-cyan-400 group-hover:text-black text-gray-400 text-sm transition-all font-medium border border-white/5 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                    {item.desc}
                </div>
             </Link>
        ))}

      </div>
    </section>
  );
};