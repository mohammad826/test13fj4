import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Portfolio } from './pages/Portfolio';

// Scroll to top on route change wrapper
const ScrollToTop: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen w-full flex flex-col text-white font-sans selection:bg-amber-500 selection:text-black pb-8 overflow-x-hidden">
        <Navbar />
        
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-32 flex flex-col items-center">
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            </ScrollToTop>
        </main>

        <footer className="w-full pt-8 md:pt-12 pb-8 border-t border-white/5 bg-black/20 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-right">
                <div className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                    چاپ نگار
                </div>
                <div className="text-gray-500 text-xs md:text-sm">
                    © 2025 Chap Negar. All rights reserved. طراحی و اجرا
                </div>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-white/5">
                        📷
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-white/5">
                        ✈️
                    </a>
                </div>
            </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;