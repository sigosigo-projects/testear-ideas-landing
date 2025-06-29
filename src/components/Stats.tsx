
import React from 'react';

const Stats = () => {
  const stats = [
    { number: '200,000+', label: 'Ideas Validadas' },
    { number: '4.5/5', label: 'Calificación Promedio' },
    { number: '95%', label: 'Precisión en Predicciones' },
    { number: '50+', label: 'Países Atendidos' }
  ];

  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Resultados que Hablan por Sí Solos
          </h2>
          <p className="text-xl text-purple-100">
            Miles de emprendedores ya han validado sus ideas con nosotros
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-purple-100 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
