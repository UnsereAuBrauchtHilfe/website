import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import CountUp from 'react-countup';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [signatureCount, setSignatureCount] = useState(1); // Fallback Wert (echte Petition startet bei 1)
  const [isLoadingSignatures, setIsLoadingSignatures] = useState(true);

  // Live Signature Count von Railway API abrufen
  useEffect(() => {
    const fetchSignatureCount = async () => {
      try {
        console.log('🔄 Fetching live signature count...');
        const response = await fetch('https://openpetitionscraper-production.up.railway.app/api/signatures/current');
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('✅ Live signature data:', data);
        
        if (data.count && typeof data.count === 'number' && data.count > 0) {
          setSignatureCount(data.count);
          console.log(`📊 Updated signature count: ${data.count}`);
        }
      } catch (error) {
        console.warn('⚠️ Could not fetch live signature count, using fallback:', error);
        // Fallback zur statischen Zahl - kein Error für User
      } finally {
        setIsLoadingSignatures(false);
      }
    };

    fetchSignatureCount();
  }, []);

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
              href="https://www.openpetition.eu/at/petition/online/unsere-au-braucht-hilfe-der-klosterneuburger-au-droht-die-verlandung-3"
              target="_blank"
              rel="noopener noreferrer"
              className="button-cta text-lg transform hover:scale-105 transition-transform mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
            >
              Jetzt Petition unterstützen
            </a>
            <p className="text-lg mb-12 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
              Bereits{' '}
              {isLoadingSignatures ? (
                <span className="inline-flex items-center font-bold">
                  <span className="animate-pulse">...</span>
                </span>
              ) : (
                <CountUp 
                  end={signatureCount} 
                  duration={2} 
                  separator="." 
                  className="font-bold" 
                />
              )}{' '}
              Unterstützer:innen haben unterschrieben.
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