import React, { useState, useEffect } from 'react';
import { Droplet } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-black/30 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Droplet className={`mr-2 ${isScrolled ? 'text-secondary' : 'text-white'}`} size={28} />
          <span className={`font-bold text-xl ${isScrolled ? 'text-secondary' : 'text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'}`}>
            Klosterneuburger Au
          </span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#problem" 
                className={`hover:opacity-75 transition-opacity ${
                  isScrolled ? 'text-gray-800' : 'text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'
                }`}
              >
                Problem
              </a>
            </li>
            <li>
              <a 
                href="#solution" 
                className={`hover:opacity-75 transition-opacity ${
                  isScrolled ? 'text-gray-800' : 'text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'
                }`}
              >
                Lösungsansatz
              </a>
            </li>
            <li>
              <a 
                href="#team" 
                className={`hover:opacity-75 transition-opacity ${
                  isScrolled ? 'text-gray-800' : 'text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'
                }`}
              >
                Unterstützer
              </a>
            </li>
            <li>
              <a 
                href="https://www.openpetition.eu/at/petition/online/unsere-au-braucht-hilfe-der-klosterneuburger-au-droht-die-verlandung-3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-cta text-sm py-1 px-3 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
              >
                Jetzt Unterstützen
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;