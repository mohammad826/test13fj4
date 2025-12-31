import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'خانه', path: '/' },
  { label: 'خدمات', path: '/services' },
  { label: 'نمونه کارها', path: '/portfolio' },
  { label: 'درباره ما', path: '/about' },
  { label: 'تماس با ما', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
        <div className="glass-panel rounded-full px-4 py-3 flex items-center justify-between max-w-5xl w-full bg-black/40 !border-white/10 !shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
               <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Toggle Menu"
               >
                  {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                  )}
               </button>
          </div>

          {/* Logo (Visible on Mobile & Desktop) */}
          <div className="font-black text-xl md:text-2xl text-white tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            چاپ نگار
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5 mx-auto">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                      isActive 
                      ? 'text-black bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] font-bold' 
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
          </div>

          {/* Call to Action (Desktop) */}
          <div className="hidden md:block">
             <NavLink to="/contact" className="px-5 py-2.5 rounded-full border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-black transition-all duration-300 text-sm font-bold shadow-[0_0_15px_rgba(251,191,36,0.1)] hover:shadow-[0_0_25px_rgba(251,191,36,0.4)] whitespace-nowrap">
                سفارش آنلاین
             </NavLink>
          </div>

          {/* Mobile Spacer to balance the hamburger icon */}
          <div className="md:hidden w-10"></div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col items-center justify-center ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
          {/* Decorative Background */}
          <div className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] bg-cyan-500/20 rounded-full blur-[100px] animate-pulse-glow"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[80vw] h-[80vw] bg-gold-500/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }}></div>

          <div className="flex flex-col gap-6 text-center w-full px-8 relative z-10">
            {navItems.map((item, idx) => (
              <NavLink
                key={item.path}
                to={item.path}
                style={{ transitionDelay: `${idx * 50}ms` }}
                className={({ isActive }) =>
                  `text-2xl font-bold py-4 border-b border-white/5 transition-all duration-300 ${
                    isActive 
                    ? 'text-cyan-400 border-cyan-400/30 scale-105' 
                    : 'text-white hover:text-cyan-200'
                  } ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            <NavLink 
              to="/contact"
              className={`mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-gold-400 to-gold-600 text-black font-bold text-lg shadow-lg shadow-gold-400/20 transition-all duration-500 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              شروع سفارش
            </NavLink>
          </div>
      </div>
    </>
  );
};