export default function Achievements() {
  return (
    <section id="realisations" className="scroll-mt-36">
       {/* Titre de la section */}
       <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-[#00ff00]">🏆</span> Distinctions
       </h3>

       {/* Carte Compacte (Format Liste conservé) */}
       <div className="bg-[#00ff00]/5 border border-[#00ff00]/20 p-4 rounded-lg flex items-center gap-4 hover:bg-[#00ff00]/10 hover:border-[#00ff00]/50 transition-all group">
          
          {/* 1. L'Icône (Simple comme sur ton image) */}
          <div className="text-4xl drop-shadow-[0_0_10px_rgba(192,192,192,0.5)]">
             🥈
          </div>

          {/* 2. Le Contenu Texte */}
          <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-2">
                  {/* Titre avec Lien NDI */}
                  <a 
                    href="https://www.nuitdelinfo.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-[#00ff00] hover:underline transition-colors"
                  >
                    Défi "Formulaire augmenté" (NDI 2025)
                  </a>

                  {/* Badge Leader (Intégré discrètement) */}
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#00ff00] text-black uppercase tracking-wide">
                     Leader
                  </span>
              </div>

              {/* Sous-titre avec Lien District 25 */}
              <p className="text-sm text-slate-400 mt-1">
                  Médaille d'argent avec le groupe{' '}
                  <a 
                    href="https://rocks-project-frontend.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-300 border-b border-slate-600 hover:text-[#00ff00] hover:border-[#00ff00] transition-colors"
                  >
                    District 25
                  </a>
              </p>
          </div>

       </div>
    </section>
  );
}