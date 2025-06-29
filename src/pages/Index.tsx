
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <HeroSection />
      <Features />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;
