export default function Achievements() {
  return (
    <section id="realisations" className="scroll-mt-36">
       <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{color: 'var(--text-primary)'}}>
          <span className="text-[#00ff00]">🏆</span> Distinctions
       </h3>

       <div className="bg-[#00ff00]/5 border border-[#00ff00]/20 p-4 rounded-lg flex items-center gap-4 hover:bg-[#00ff00]/10 hover:border-[#00ff00]/50 transition-all group">
          
          <div className="text-4xl drop-shadow-[0_0_10px_rgba(192,192,192,0.5)]">
             🥈
          </div>

          <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-2">
                  <a 
                    href="https://www.nuitdelinfo.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold transition-colors hover:text-[#00ff00] hover:underline"
                    style={{color: 'var(--text-primary)'}}
                  >
                    Défi "Formulaire augmenté" (NDI 2025)
                  </a>

                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#00ff00] text-black uppercase tracking-wide">
                     Leader
                  </span>
              </div>

              {/* ICI : LE LIEN DISTRICT 25 PASSE EN NOIR */}
              <p className="text-sm mt-1 text-[var(--text-secondary)]">
                  Médaille d'argent avec le groupe{' '}
                  <a 
                    href="https://rocks-project-frontend.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold border-b border-[var(--text-secondary)] hover:text-[#00ff00] hover:border-[#00ff00] transition-colors"
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