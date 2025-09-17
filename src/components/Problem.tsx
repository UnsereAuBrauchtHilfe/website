import React, { useEffect, useRef } from 'react';

const Problem: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="problem" ref={sectionRef} className="py-20 section-fade">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Die Bedrohung unserer Au</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">Die galoppierende Verlandung</h3>
            <p className="text-lg mb-4">
              Die galoppierende Verlandung des Geschirrwassers, des Feuchtraumgebietes der Klosterneuburger Au, 
              schreitet fort. Unser wunderschönes Naherholungsgebiet, Lebensraum für unzählige Tier- und 
              Pflanzenarten und Grundwasserspeicher für die Stadt, drohen für immer verloren zu gehen.
            </p>
            <p className="text-lg font-bold animate-pulse">Lassen wir das nicht zu!</p>
          </div>
          <div className="h-64 md:h-auto overflow-hidden rounded-lg shadow-lg">
            <img 
              src="/images/Verlandung.jpg" 
              alt="Verlandung der Au" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mt-20">
          <div className="h-64 md:h-auto overflow-hidden rounded-lg shadow-lg md:order-1 order-2">
            <img 
              src="/images/folgen.png" 
              alt="Austrocknung" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center md:order-2 order-1">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">Die Folgen sind dramatisch</h3>
            <ul className="text-lg space-y-2">
              <li className="flex items-start">
                <span className="inline-block mr-2 text-secondary">•</span>
                <span>Der Schlamm steigt immer höher. Das Wasser wird immer weniger.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block mr-2 text-secondary">•</span>
                <span>Schlammpackungen statt Badespaß? Das wollen wir nicht.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block mr-2 text-secondary">•</span>
                <span>Sauberes Grundwasser in Gefahr? Bitte nein.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block mr-2 text-secondary">•</span>
                <span>Tier- und Pflanzenarten nur mehr im Schulbuch? Das kann nicht unsere Zukunft sein.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary rounded-lg p-6 md:p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Laut Experten der Universität für Bodenkultur:</h3>
              <p className="text-lg">
                Ohne Gegenmaßnahmen steht die Existenz der Klosterneuburger Au auf dem Spiel. 
                Die Rettung der Klosterneuburger Au ist daher dringend notwendig (siehe <a href="https://noe.orf.at/stories/3307241/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary-dark underline">ORF vom 31.5.2025</a>).
              </p>
            </div>
            <div className="mt-6 md:mt-0 md:ml-6">
              <a 
                href="https://www.openpetition.eu/at/petition/online/keine-deponie-im-naturschutzgebiet-jetzt-handeln"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Jetzt handeln
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;