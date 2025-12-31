import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { CarouselSection } from '../components/CarouselSection';
import { InfoGrid } from '../components/InfoGrid';
import { PromoBanner } from '../components/PromoBanner';
import { AIEditor } from '../components/AIEditor';

export const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center animate-fadeIn">
      <HeroSection />
      <CarouselSection />
      
      <PromoBanner />
      <InfoGrid />
    </div>
  );
};