import React from 'react';
import { Droplet, Facebook, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="wave-divider transform rotate-180"></div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Droplet className="mr-2" size={24} />
              <h3 className="text-xl font-bold">Retten wir unser Wasser!</h3>
            </div>
            <p className="mb-4">
              Gemeinsam für den Erhalt unseres wertvollen Naturgebiets und Grundwasserspeichers.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Initiative unterstützen</h3>
            <p className="mb-4">
              Jede Stimme zählt! Unterzeichnen Sie unsere Petition und helfen Sie mit, die 
              Klosterneuburger Au zu retten.
            </p>
            <a 
              href="https://www.change.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-primary-dark transition-colors"
            >
              Zur Petition auf change.org
            </a>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt & Social Media</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-white hover:text-primary-dark transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-primary-dark transition-colors">
                <Instagram size={24} />
              </a>
              <a href="mailto:info@rettenwirunserwasser.at" className="text-white hover:text-primary-dark transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p>info@rettenwirunserwasser.at</p>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} Initiative zur Rettung der Klosterneuburger Au. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;