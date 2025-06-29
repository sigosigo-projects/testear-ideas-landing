
import React from 'react';
import IdeaForm from './IdeaForm';
import TestimonialsCarousel from './TestimonialsCarousel';

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Valida y Califica
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Tus Ideas de Emprendimiento
              </span>
            </h1>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Testealo.ai</strong> es una herramienta de IA que te ayuda a validar tu idea de negocio, analizar la competencia y encontrar a tus clientes ideales. ¡Únete a más de 200,000 emprendedores que ya han validado sus ideas con nosotros! 💡
              </p>
            </div>

            <TestimonialsCarousel />
          </div>
          
          <div className="lg:pl-8">
            <IdeaForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
