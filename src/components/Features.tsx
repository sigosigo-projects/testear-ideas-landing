
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Users, TrendingUp, Rocket, Target, BarChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Análisis por IA',
      description: 'Nuestra IA analiza tu idea desde múltiples perspectivas para darte feedback valioso.'
    },
    {
      icon: Users,
      title: 'Simulación de Clientes',
      description: 'Simulamos feedback real de clientes potenciales para validar tu mercado.'
    },
    {
      icon: TrendingUp,
      title: 'Análisis de Competencia',
      description: 'Identificamos y analizamos a tus competidores para encontrar oportunidades.'
    },
    {
      icon: Target,
      title: 'Definición de Audiencia',
      description: 'Te ayudamos a identificar y definir tu cliente ideal con precisión.'
    },
    {
      icon: Rocket,
      title: 'Plan de Lanzamiento',
      description: 'Recibe una estrategia detallada para llevar tu idea al mercado.'
    },
    {
      icon: BarChart,
      title: 'Puntuación de Viabilidad',
      description: 'Obtén una calificación objetiva de la viabilidad de tu startup.'
    }
  ];

  return (
    <section id="como-funciona" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo Funciona Testealo.ai?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestra plataforma utiliza inteligencia artificial avanzada para analizar y validar tu idea de startup de manera integral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border border-gray-200">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
