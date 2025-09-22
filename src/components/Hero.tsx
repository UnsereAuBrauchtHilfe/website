import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  // API Call entfernt - nicht mehr benötigt für statischen Text

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/images/Einstieg.jpg')",
          backgroundPosition: '50% 40%'
        }}
      />
      <div 
        className={`relative h-full flex flex-col items-center justify-center text-center px-4 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
        }`}
      >
        <div className="relative text-white">
          <div 
            className="absolute inset-0 -m-20"
            style={{
              background: 'radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0) 70%)',
              transform: 'scale(1.5)',
            }}
          />
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
              Unsere Au <br /> braucht Hilfe!
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl font-medium mx-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
              Der Klosterneuburger Au droht die Verlandung.
            </p>
            <a 
              href="https://www.openpetition.eu/at/petition/online/keine-deponie-im-naturschutzgebiet-jetzt-handeln"
              target="_blank"
              rel="noopener noreferrer"
              className="button-cta text-lg transform hover:scale-105 transition-transform mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
            >
              Jetzt Petition unterstützen
            </a>
            <p className="text-lg mb-12 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
              Natur und Mensch sagen Danke.
            </p>
          </div>
        </div>
        <a href="#problem" className="absolute bottom-10 animate-bounce text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
          <ChevronDown size={32} className="stroke-2" />
        </a>
      </div>
    </section>
  );
};

export default Hero