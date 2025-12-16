export default function Skills() {
  return (
    <section id="competences" className="scroll-mt-36 spotlight-card rounded-2xl p-6 backdrop-blur-md">
      <div className="card-content">
          <h3 className="text-lg font-bold text-[var(--text-primary)] mb-6 border-b border-[#00ff00]/30 pb-2 flex items-center gap-2">
             <span className="text-[#00ff00]">🛠️</span> Arsenal Technique
          </h3>
          
          <div className="space-y-6">
            
            {/* GROUPE 1 : AÉRONAUTIQUE & INGÉNIERIE (Mis en avant) */}
            <div>
               <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-[#00ff00] uppercase tracking-wider">Conception & Ingénierie</span>
                  <span className="text-[10px] text-black bg-[#00ff00] px-2 rounded font-bold">Cœur de métier</span>
               </div>
               <div className="flex flex-wrap gap-2">
                  {['Fusion 360 (CAO)', 'AutoCAD', 'Simulation Numérique', 'Mathématiques', 'Physique Mécanique'].map(s => (
                     <span key={s} className="px-2 py-1 bg-[#050a05] border border-[#00ff00]/40 text-xs text-[var(--text-primary)] rounded hover:bg-[#00ff00] hover:text-black transition-all cursor-default shadow-[0_0_5px_rgba(0,255,51,0.1)]">
                        {s}
                     </span>
                  ))}
               </div>
            </div>

            {/* GROUPE 2 : INFORMATIQUE (Outils au service de l'ingénierie) */}
            <div>
               <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-[#00ff00] uppercase tracking-wider">Programmation & Outils</span>
                  <span className="text-[10px] text-slate-500 bg-slate-900 px-2 rounded border border-slate-800">Compétences Transverses</span>
               </div>
               <div className="flex flex-wrap gap-2">
                  {['C / C++', 'Python (Data/Calcul)', 'Algorithmique', 'GitHub', 'Next.js', 'Excel Avancé'].map(s => (
                     <span key={s} className="px-2 py-1 bg-[#050a05] border border-[#00ff00]/20 text-xs text-slate-300 rounded hover:border-[#00ff00] hover:text-[var(--text-primary)] transition-all cursor-default">
                        {s}
                     </span>
                  ))}
               </div>
            </div>

            {/* GROUPE 3 : AUTRES */}
            <div>
               <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-[#00ff00] uppercase tracking-wider">Sécurité & Système</span>
               </div>
               <div className="flex flex-wrap gap-2">
                  {['Architecture OS', 'Sécurité Informatique', 'Kali Linux'].map(s => (
                     <span key={s} className="px-2 py-1 bg-[#050a05] border border-[#00ff00]/20 text-xs text-[var(--text-secondary)] rounded hover:border-[#00ff00] hover:text-[var(--text-primary)] transition-all cursor-default">
                        {s}
                     </span>
                  ))}
               </div>
            </div>
          </div>
      </div>
    </section>
  );
}