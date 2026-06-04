import React, { useEffect, useState } from 'react';
import { AlertTriangle, ExternalLink, FileText, X } from 'lucide-react';

const petitionUrl =
  'https://www.openpetition.eu/at/petition/online/unsere-au-braucht-hilfe-der-klosterneuburger-au-droht-die-verlandung-3';

const publicationImage = '/images/badeverbot-geschirrwasser.jpg';

const BadeverbotNotice: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen]);

  return (
    <section className="bg-red-50 py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl border-4 border-red-700 bg-white p-5 shadow-2xl md:p-8">
          <div className="relative border-2 border-dashed border-red-700 p-5 md:p-8">
            <div className="absolute -top-5 left-4 bg-white px-3 py-1 text-sm font-bold uppercase tracking-[0.25em] text-red-700 md:left-8">
              Aktuell
            </div>

            <div className="flex flex-col gap-6">
              <div className="max-w-4xl">
                <div className="mb-8 inline-flex rotate-[-2deg] items-center border-4 border-red-700 px-4 py-2 text-red-700 shadow-sm md:mb-10">
                  <AlertTriangle className="mr-3 h-7 w-7 flex-shrink-0" />
                  <h2 className="text-2xl font-black leading-tight md:text-4xl">
                    BH lässt Badeverbot für das <br className="hidden md:block" />
                    Geschirrwasser
                  </h2>
                </div>

                <p className="text-lg leading-relaxed text-gray-800">
                  Aufgrund der historisch geringen Wassertiefe im Geschirrwasser, die großteils
                  nur noch 1 m oder darunter beträgt und auf die fortschreitende Verlandung
                  zurückzuführen ist, ist die Wasserqualität bereits im Mai gekippt und die
                  Behörde hat das Gewässer gesperrt. Es ist dringend Zeit zu handeln. Bitte
                  unterschreiben Sie jetzt!
                </p>
              </div>

              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="inline-flex items-center text-left font-semibold text-red-700 underline decoration-2 underline-offset-4 transition-colors hover:text-red-900"
                >
                  <FileText className="mr-2 h-5 w-5 flex-shrink-0" />
                  Veröffentlichung der Gemeinde Klosterneuburg ansehen
                </button>

                <a
                  href={petitionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-red-700 px-6 py-3 text-center font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-xl sm:flex-shrink-0"
                >
                  Bitte unterschreiben Sie jetzt!
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Veröffentlichung der Gemeinde Klosterneuburg"
        >
          <div
            className="relative max-h-full w-full max-w-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -right-2 -top-12 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black md:-right-4"
              aria-label="Veröffentlichung schließen"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={publicationImage}
              alt="Veröffentlichung der Bezirkshauptmannschaft Tulln zum Badeverbot am Altarm Geschirrwasser"
              className="mx-auto max-h-[85vh] w-auto rounded-lg bg-white object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default BadeverbotNotice;
