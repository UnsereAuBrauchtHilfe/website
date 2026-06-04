import React, { useEffect, useState } from 'react';
import { AlertTriangle, ExternalLink, FileText, X } from 'lucide-react';

const petitionUrl =
  'https://www.openpetition.eu/at/petition/online/unsere-au-braucht-hilfe-der-klosterneuburger-au-droht-die-verlandung-3';

const publicationImage = '/images/badeverbot-geschirrwasser.jpg';

type NoticeDocument = 'gemeinde' | 'bh';

const BadeverbotNotice: React.FC = () => {
  const [activeDocument, setActiveDocument] = useState<NoticeDocument | null>(null);

  useEffect(() => {
    if (!activeDocument) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDocument(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDocument]);

  const closeLightbox = () => setActiveDocument(null);

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

              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex flex-col items-start gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveDocument('gemeinde')}
                    className="inline-flex items-center text-left font-semibold text-red-700 underline decoration-2 underline-offset-4 transition-colors hover:text-red-900"
                  >
                    <FileText className="mr-2 h-5 w-5 flex-shrink-0" />
                    Brief der Gemeinde Klosterneuburg ansehen
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveDocument('bh')}
                    className="inline-flex items-center text-left font-semibold text-red-700 underline decoration-2 underline-offset-4 transition-colors hover:text-red-900"
                  >
                    <FileText className="mr-2 h-5 w-5 flex-shrink-0" />
                    Bescheid der BH ansehen
                  </button>
                </div>

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

      {activeDocument && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={
            activeDocument === 'gemeinde'
              ? 'Brief der Gemeinde Klosterneuburg'
              : 'Bescheid der Bezirkshauptmannschaft Tulln'
          }
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="fixed right-4 top-4 z-[110] inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Dokument schließen"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="relative max-h-full w-full max-w-3xl overflow-y-auto"
            onClick={(event) => event.stopPropagation()}
          >
            {activeDocument === 'gemeinde' ? (
              <article className="mx-auto max-h-[85vh] overflow-y-auto rounded-lg bg-white p-6 text-gray-900 shadow-2xl md:p-10">
                <h3 className="mb-6 text-3xl font-normal">Altarm im Strandbad gesperrt</h3>
                <p className="mb-5 text-lg font-bold leading-relaxed">
                  Aufgrund letzter Untersuchungsergebnisse des Wassers im Altarm im Strandbad
                  Klosterneuburg wurde seitens der Bezirkshauptmannschaft Tulln per Verordnung
                  ein allgemeines Badeverbot verhängt. Dies betrifft nicht die
                  Schwimmbeckenanlagen.
                </p>
                <p className="mb-5 text-lg leading-relaxed">
                  Laut Prüfbericht der Eurofins Umweltanalytik Österreich GmbH vom 27. Mai 2026
                  hat eine Badewasseruntersuchung des Flussbades „Altarm Geschirrwasser” am 12.
                  Mai 2026 eine Gefährdung der Badegäste durch eine mögliche Massenentwicklung
                  bzw. ein Freisetzen von Cyanobakterientoxine ergeben. Das Gewässer entspreche
                  in chemisch-physikalischer Hinsicht, auf Grund der stark verminderten
                  Sichttiefe sowie den erhöhten Parameterwerten von Oxidierbarkeit, Phosphor und
                  Chlorophyll-a nicht den Anforderungen an Badegewässer. Durch mögliche
                  Badewasserinfektionen sei eine Gefährdung der Gesundheit gegeben. Eine
                  Kontrolluntersuchung wurde unverzüglich in Auftrag gegeben. Bis weitere
                  Ergebnisse vorliegen bleibt das Badeverbot im Altarm aufrecht.
                </p>
                <p className="text-lg leading-relaxed">
                  Quelle: Homepage der Stadtgemeinde Klosterneuburg
                </p>
              </article>
            ) : (
              <img
                src={publicationImage}
                alt="Veröffentlichung der Bezirkshauptmannschaft Tulln zum Badeverbot am Altarm Geschirrwasser"
                className="mx-auto max-h-[85vh] w-auto rounded-lg bg-white object-contain shadow-2xl"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default BadeverbotNotice;
