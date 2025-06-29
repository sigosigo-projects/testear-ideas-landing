
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Valida y Califica
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Tus Ideas de Startup
              </span>
            </h1>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                ¿Vale la pena lanzar mi nueva idea de producto? <strong>Testealo.ai</strong> es una herramienta de IA que te ayuda a escribir una propuesta de valor, <strong>analizar la competencia, encontrar a tus clientes</strong> y <strong>validar tu idea de negocio</strong>.
              </p>
              
              <p>
                Nuestra IA <strong>simulará feedback de clientes y un lanzamiento de producto</strong>, calificará y evaluará tu idea y te dará consejos útiles para el lanzamiento. ¿Tienes curiosidad si tienes el product market fit? Deja que nuestra IA lo analice por ti.
              </p>
              
              <p>
                Obtén feedback rápido de ideas de startup (gratis) a través del formulario. Una vez que tu idea sea validada, <strong>construye tu sitio web o landing page generada por IA</strong> con las sugerencias que nuestra IA te da.
              </p>
              
              <p>
                Este es el mejor manera de testear una idea de startup! Únete a la <strong>comunidad más grande del mundo de exploradores de ideas!</strong> 😊 Hemos ayudado a <strong>más de 200,000 personas</strong> a explorar y refinar sus ideas de startup.
              </p>
              
              <p>
                Somos una de las mejores herramientas de IA para startups en el mundo (4.5 de 5 estrellas) para emprendedores. <strong>¿Puedes superar el récord actual de puntuación alta?</strong> 💡
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
