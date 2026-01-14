'use client'
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative transition-colors duration-500">
      {/* J'ai gardé la structure flex/border mais retiré le bouton à droite */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#00CCFF]/30">
        <div className="w-full">
          
          {/* TITRE */}
          <h1 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] mb-2 tracking-tight transition-colors duration-500">
            {t.hero.titlePart1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00CCFF] to-blue-600 drop-shadow-[0_0_15px_rgba(0,204,255,0.3)]">{t.hero.titlePart2}</span>
          </h1>
          
          {/* DESCRIPTION */}
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mt-4 transition-colors duration-500">
            {t.hero.description}
          </p>
        </div>
      </div>
    </section>
  );
}