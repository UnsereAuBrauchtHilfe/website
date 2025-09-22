import React, { useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

const Solution: React.FC = () => {
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
    <section id="solution" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white section-fade overflow-x-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Der Lösungsansatz</h2>
        
        <div className="relative rounded-2xl overflow-hidden mb-16 shadow-2xl">
          <img 
            src="/images/background2.jpg" 
            alt="Sanfte Eingriffe in der Au" 
            className="w-full h-[300px] md:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex items-center justify-center mb-4">
                  <Sparkles className="text-primary mr-2" />
                  <h3 className="text-xl md:text-3xl font-bold">
                    Sanfte Eingriffe können unsere Au retten
                  </h3>
                </div>
                <p className="text-base md:text-xl">
                  Sanfte Eingriffe zur stärkeren Durchströmung der Au mit Donauwasser können unsere Au retten. 
                  Wir bitten alle Entscheidungsträger um gemeinsames, beherztes Vorgehen, um den Plan für eine 
                  hydrologische und ökologische Sanierung zu erarbeiten und umzusetzen.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Forderungen Sektion */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Jetzt muss gehandelt werden!
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Wir ersuchen die Gemeinde Klosterneuburg, das Land Niederösterreich, den Bund, das Chorherrenstift Klosterneuburg sowie den Verbund um
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="grid gap-6 max-w-3xl mx-auto">
              
              {/* Forderung 1 */}
              <div className="flex items-start space-x-4 bg-white/70 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-800">
                    rasche Etablierung einer Projektgruppe
                  </h4>
                </div>
              </div>

              {/* Forderung 2 */}
              <div className="flex items-start space-x-4 bg-white/70 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-800">
                    Einholung der ergänzenden Gutachten
                  </h4>
                </div>
              </div>

              {/* Forderung 3 */}
              <div className="flex items-start space-x-4 bg-white/70 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-800">
                    Klärung der Finanzierung
                  </h4>
                </div>
              </div>

              {/* Forderung 4 */}
              <div className="flex items-start space-x-4 bg-white/70 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-800">
                    zeitnahe Umsetzung des Sanierungsprojektes
                  </h4>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-secondary/10 p-3 rounded-full">
                <Sparkles className="text-secondary h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold ml-4 text-secondary">
                Die erste gute Nachricht
              </h3>
            </div>
            <p className="text-lg mb-6 text-gray-700">
              Unser Wasser grenzt unmittelbar an Österreichs mächtigstes Fließgewässer. 
              Da wäre es doch gelacht, wenn wir unserem Altarm nicht neues Leben einhauchen könnten!
            </p>
            <div className="h-64 overflow-hidden rounded-xl shadow-md">
              <img 
                src="/images/losung1.png" 
                alt="Fließgewässer" 
                className="w-full h-full object-cover transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-secondary/10 p-3 rounded-full">
                <Sparkles className="text-secondary h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold ml-4 text-secondary">
                Die zweite gute Nachricht
              </h3>
            </div>
            <p className="text-lg mb-6 text-gray-700">
              Wir sind mit unserer Problematik nicht allein. Überall kämpfen Auen, Alt- und Seitenarme ums Überleben. 
              Aber es gibt immer mehr Beispiele, wo mit gezielten, klug abgestimmten Maßnahmen eine wasserbauliche 
              und ökologische „Redynamisierung" erfolgreich war. So zuletzt im Nationalpark Donauauen, der Wachau oder der Mündung der Pielach.
            </p>
            <div className="h-64 overflow-hidden rounded-xl shadow-md">
              <img 
                src="/images/Haubentaucher.png" 
                alt="Haubentaucher in der Au" 
                className="w-full h-full object-cover transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        <div className="relative h-[600px] md:h-[800px] rounded-2xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-full">
              <img 
                src="/images/vorher.jpg" 
                alt="Vor der Sanierung" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-full">
              <img 
                src="/images/nachher.jpg" 
                alt="Nach der Sanierung" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
            <div className="absolute bottom-0 left-0 right-0 text-center text-white p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Erhalten wir Klosterneuburgs wunderschönes Naherholungsgebiet!
              </h3>
              <p className="text-lg md:text-xl">
                Sichern wir unser Grundwasser! Bewahren wir die Tier- und Pflanzenwelt!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;