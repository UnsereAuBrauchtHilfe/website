import React, { useEffect, useRef, useState } from 'react';
import { Users, ChevronDown } from 'lucide-react';

const TeamSection: React.FC = () => {
  const [showAllMembers, setShowAllMembers] = useState(false);
  const [shuffledTeamMembers, setShuffledTeamMembers] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const originalTeamMembers = [
    "Angela Andorrer (Mitinitiatorin)",
    "Eduard Böhler (Vorstand Strandbadsiedlung, Mitinitiator)",
    "Laurenz Lanik (Mitintiator)",
    "Ines Lemberger (Mitinitiatorin)",
    "Theodora Manolakos (Mitinitiatorin)",
    "Christian Seethaler (Mitinitiator)",
    "Peter Steiner (Kleingartenvereine Bezirksorganisation Klosterneuburg und Umgebung, Mitinitiator)",
    "Karl Valenta (Vorstand Strandbadsiedlung)",
    "Ilse Wrbka (Naturschutzbunds Klosterneuburg, Mitinitiatorin)",
    "Thomas Wrbka (Präsident Naturschutzbund Österreich, Mitinitiator)",
    "Peter Zulka (Bundesumweltamt)"
  ];

  // Fisher-Yates Shuffle Algorithmus
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Team-Mitglieder einmalig beim ersten Laden shuffeln
  useEffect(() => {
    setShuffledTeamMembers(shuffleArray(originalTeamMembers));
  }, []);

  const visibleMembers = showAllMembers ? shuffledTeamMembers : shuffledTeamMembers.slice(0, 6);

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
    <section id="team" ref={sectionRef} className="py-20 bg-gray-50 section-fade">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Users size={32} className="text-secondary mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold">Wer sind wir?</h2>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg mb-6">
            Wir sind Bewohner, Besucher, Pensionisten, Familien, leben seit Generationen oder erst seit Kurzem hier. 
            Uns vereint die Sorge um dieses Stück Paradies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleMembers.map((person) => (
            <div key={person} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-center">{person}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button 
            onClick={() => setShowAllMembers(!showAllMembers)}
            className="flex items-center mx-auto space-x-2 text-secondary hover:text-primary-dark transition-colors"
          >
            <span>{showAllMembers ? 'Weniger anzeigen' : 'Alle Unterstützer anzeigen'}</span>
            <ChevronDown className={`transform transition-transform ${showAllMembers ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.openpetition.eu/at/petition/online/keine-deponie-im-naturschutzgebiet-jetzt-handeln"
            target="_blank"
            rel="noopener noreferrer"
            className="button-cta"
          >
            Werde Teil unserer Initiative
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection