'use client'
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';

export default function Hero() {
  const { t } = useLanguage();

  return (
    // MODIFICATION IMPORTANTE : 
    // J'ai passé le padding-top de 'pt-32' à 'pt-24'.
    // pt-24 = 96px. Comme ta barre de navigation fait environ 80px, le texte commencera tout de suite après.
    <section className="relative min-h-[90vh] flex items-start pt-24 overflow-hidden">

      {/* TEXTE */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-3xl">
          {/* J'ajoute 'mt-4' (petite marge) pour ajuster finement si c'est TROP collé, sinon tu peux l'enlever */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[var(--text-primary)] mb-6 tracking-tight leading-none mt-4">
            {t.hero.titlePart1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00CCFF] to-blue-600 drop-shadow-[0_0_30px_rgba(0,204,255,0.5)]">
              {t.hero.titlePart2}
            </span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            {t.hero.description}
          </p>
        </div>
      </div>

      {/* IMAGE AVION */}
      <div className="absolute bottom-0 right-0 z-0 w-[90%] md:w-[80%] lg:w-[70%] pointer-events-none">
        <Image
          src="/images/airplane_transparent.png"
          alt="Avion de chasse futuriste"
          width={673}
          height={371}
          priority
          className="w-full h-auto object-bottom drop-shadow-2xl"
        />
      </div>
    </section>
  );
}