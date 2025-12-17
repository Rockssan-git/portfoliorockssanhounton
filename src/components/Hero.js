'use client' // Important pour utiliser le hook
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage(); // On récupère les textes

  return (
    <section className="relative transition-colors duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#00CCFF]/30">
        <div>
          
          {/* TITRE TRADUIT */}
          <h1 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] mb-2 tracking-tight transition-colors duration-500">
            {t.hero.titlePart1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00CCFF] to-blue-600 drop-shadow-[0_0_15px_rgba(0,204,255,0.3)]">{t.hero.titlePart2}</span>
          </h1>
          
          {/* DESCRIPTION TRADUITE */}
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mt-4 transition-colors duration-500">
            {t.hero.description}
          </p>
        </div>

        <div className="flex gap-3">
          <a 
            href="https://cvdesignr.com/p/66faf1db57f46?hl=fr_FR" 
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 bg-[#020617] border border-[#00CCFF]/30 text-slate-200 text-sm font-bold rounded-lg transition-all duration-300 
                       hover:border-[#00CCFF] hover:text-[#00CCFF] hover:bg-[#00CCFF]/5 
                       hover:shadow-[0_0_25px_rgba(0,204,255,0.45)] flex items-center gap-3"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            {t.hero.cvButton}
          </a>
        </div>
      </div>
    </section>
  );
}