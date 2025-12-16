export default function Hero() {
  return (
    <section className="relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#00ff00]/30">
        <div>
          {/* Badge animé */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff00]/10 border border-[#00ff00]/30 mb-4 shadow-[0_0_10px_rgba(0,255,51,0.1)]">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff00] opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff00]"></span>
             </span>
             <span className="text-[10px] font-bold text-[#00ff00] uppercase tracking-widest">Recherche Stage Ouvrier</span>
          </div>

          {/* TITRE PRINCIPAL */}
          <h1 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] mb-2 tracking-tight">
            FUTUR INGÉNIEUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff00] to-emerald-600 drop-shadow-[0_0_10px_rgba(0,255,51,0.3)]">AÉRONAUTIQUE</span>
          </h1>
          
          {/* DESCRIPTION */}
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mt-4">
            Étudiant en Sciences pour l'Ingénieur à l'Université de Bordeaux. Je fusionne la rigueur de la <strong className="text-[var(--text-primary)]">Conception Mécanique</strong> avec la puissance des <strong className="text-[var(--text-primary)]">Outils Numériques</strong> pour l'aviation de demain.
          </p>
        </div>

        {/* BOUTON D'ACTION - MODIFIÉ */}
        <div className="flex gap-3">
          <a 
            href="https://cvdesignr.com/p/66faf1db57f46?hl=fr_FR" 
            target="_blank"
            rel="noopener noreferrer"
            // STYLE DU BOUTON :
            // bg-[#050a05] : Fond sombre par défaut
            // hover:shadow-[0_0_25px_rgba(0,255,0,0.4)] : Le secret du "Moyen". Une ombre portée verte à 40% d'opacité.
            // hover:border-[#00ff00] : La bordure s'allume.
            className="group px-8 py-3 bg-[#050a05] border border-[#00ff00]/30 text-slate-200 text-sm font-bold rounded-lg transition-all duration-300 
                       hover:border-[#00ff00] hover:text-[#00ff00] hover:bg-[#00ff00]/5 
                       hover:shadow-[0_0_25px_rgba(0,255,0,0.45)] flex items-center gap-3"
          >
            {/* Icône Document */}
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Mon CV
          </a>
        </div>
      </div>
    </section>
  );
}