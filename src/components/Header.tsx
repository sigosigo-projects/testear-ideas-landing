
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">Testealo.ai</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#como-funciona" className="text-gray-600 hover:text-gray-900 transition-colors">
            Cómo Funciona
          </a>
          <a href="#expertos" className="text-gray-600 hover:text-gray-900 transition-colors">
            Expertos
          </a>
          <a href="#testimonios" className="text-gray-600 hover:text-gray-900 transition-colors">
            Testimonios
          </a>
          <a href="#preguntas" className="text-gray-600 hover:text-gray-900 transition-colors">
            Preguntas
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <select className="text-sm border border-gray-300 rounded px-2 py-1">
            <option>🇪🇸 Español</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
