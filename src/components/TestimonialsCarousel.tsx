
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const timer = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [api]);

  const testimonials = [
    {
      name: "María González",
      role: "Fundadora de EcoTech",
      content: "Testealo.ai me ayudó a validar mi idea antes de invertir. ¡Ahorré tiempo y dinero!",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      role: "CEO de StartupLab",
      content: "La precisión del análisis es increíble. Recomiendo esta herramienta a todos los emprendedores.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "Emprendedora Digital",
      content: "Gracias a Testealo.ai pude enfocar mejor mi propuesta de valor. ¡Excelente!",
      rating: 5
    },
    {
      name: "Luis Torres",
      role: "Founder de TechSolutions",
      content: "Una herramienta imprescindible para cualquier emprendedor. Muy fácil de usar.",
      rating: 5
    }
  ];

  return (
    <div className="mt-8">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-full">
              <Card className="bg-white/80 backdrop-blur-sm border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 mb-3 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TestimonialsCarousel;
