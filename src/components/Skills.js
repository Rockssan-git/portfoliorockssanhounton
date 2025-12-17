export default function Skills() {
  return (
    <section id="competences" className="scroll-mt-36 spotlight-card rounded-2xl p-6 backdrop-blur-md transition-colors duration-500">
      <div className="card-content">
          <h3 className="text-lg font-bold mb-6 border-b border-[#00CCFF]/30 pb-2 flex items-center gap-2" style={{color: 'var(--text-primary)'}}>
             <span className="text-[#00CCFF]">🛠️</span> Arsenal Technique
          </h3>
          
          <div className="space-y-6">
            <div>
               <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-[#00CCFF] uppercase tracking-wider">Conception & Ingénierie</span>
                  <span className="text-[10px] text-black bg-[#00CCFF] px-2 rounded font-bold">Cœur de métier</span>
               </div>
               <div className="flex flex-wrap gap-2">
                  {['Fusion 360 (CAO)', 'AutoCAD', 'Simulation Numérique', 'Mathématiques', 'Physique Mécanique'].map(s => (
                     <span key={s} className="px-2 py-1 bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[#00CCFF]/40 text-xs rounded hover:bg-[#00CCFF] hover:text-black transition-all cursor-default shadow-[0_0_5px_rgba(0,204,255,0.1)]">
                        {s}
                     </span>
                  ))}
               </div>
            </div>

            <div>
               <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-[#00CCFF] uppercase tracking-wider">Programmation & Outils</span>
                  <span className="text-[10px] text-[var(--text-secondary)] bg-[var(--badge-bg)] px-2 rounded border border-[var(--card-border)]">Compétences Transverses</span>
               </div>
               <div className="flex flex-wrap gap-2">
                  {['C / C++', 'Python (Data/Calcul)', 'Algorithmique', 'GitHub', 'Next.js', 'Excel Avancé'].map(s => (
                     <span key={s} className="px-2 py-1 bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[#00CCFF]/20 text-xs rounded hover:border-[#00CCFF] transition-all cursor-default">
                        {s}
                     </span>
                  ))}
               </div>
            </div>

            <div>
               <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-[#00CCFF] uppercase tracking-wider">Sécurité & Système</span>
               </div>
               <div className="flex flex-wrap gap-2">
                  {['Architecture OS', 'Sécurité Informatique', 'Kali Linux'].map(s => (
                     <span key={s} className="px-2 py-1 bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[#00CCFF]/20 text-xs rounded hover:border-[#00CCFF] transition-all cursor-default">
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