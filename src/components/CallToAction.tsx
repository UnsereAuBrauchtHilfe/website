import React, { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const CallToAction: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative section-fade"
      style={{ 
        backgroundImage: "url('/images/Ende.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Bitte unterstützen auch Sie die Initiative
            </h2>
            <p className="text-xl mb-8">
              Die Initiative zur Rettung der Klosterneuburger Au - einfach hier mit einigen wenigen Klicks.
              Natur und Mensch sagen Danke!
            </p>
            <a 
              href="https://www.openpetition.eu/at/petition/online/keine-deponie-im-naturschutzgebiet-jetzt-handeln"
              target="_blank"
              rel="noopener noreferrer"
              className="button-cta text-lg inline-flex items-center"
            >
              Jetzt Petition unterzeichnen
              <ExternalLink size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;