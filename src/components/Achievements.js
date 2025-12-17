export default function Achievements() {
  return (
    <section id="realisations" className="scroll-mt-36">
       {/* J'ai supprimé le titre H3 ici comme demandé */}

       <div className="bg-[#00CCFF]/5 border border-[#00CCFF]/20 p-4 rounded-lg flex items-center gap-4 hover:bg-[#00CCFF]/10 hover:border-[#00CCFF]/50 transition-all group">
          <div className="text-4xl drop-shadow-[0_0_10px_rgba(192,192,192,0.5)]">
             🥈
          </div>

          <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-2">
                  <a 
                    href="https://www.nuitdelinfo.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold transition-colors hover:text-[#00CCFF] hover:underline"
                    style={{color: 'var(--text-primary)'}}
                  >
                    Défi "Formulaire augmenté" (NDI 2025)
                  </a>

                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#00CCFF] text-black uppercase tracking-wide">
                     Leader
                  </span>
              </div>

              <p className="text-sm mt-1 text-[var(--text-secondary)]">
                  Médaille d'argent avec le groupe{' '}
                  <a 
                    href="https://rocks-project-frontend.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold border-b border-[var(--text-secondary)] hover:text-[#00CCFF] hover:border-[#00CCFF] transition-colors"
                    style={{color: 'var(--text-secondary)'}}
                  >
                    District 25
                  </a>
              </p>
          </div>
       </div>
    </section>
  );
}