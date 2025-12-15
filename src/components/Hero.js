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

          {/* TITRE MODIFIÉ */}
          <h1 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tight">
            FUTUR INGÉNIEUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff00] to-emerald-600 drop-shadow-[0_0_10px_rgba(0,255,51,0.3)]">AÉRONAUTIQUE</span>
          </h1>
          
          {/* SOUS-TITRE AJUSTÉ */}
          <p className="text-slate-400 text-lg max-w-2xl mt-4">
            Étudiant en Sciences pour l'Ingénieur à l'Université de Bordeaux. Je fusionne la rigueur de la <strong className="text-white">Conception Mécanique</strong> avec la puissance des <strong className="text-white">Outils Numériques</strong> pour l'aviation de demain.
          </p>
        </div>

        <div className="flex gap-3">
          <a href="/CV_Rockssan.pdf" target="_blank" className="px-6 py-3 bg-[#050a05] border border-[#00ff00]/30 text-slate-300 text-sm font-bold rounded-lg hover:border-[#00ff00] hover:text-[#00ff00] transition-all flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Mon CV
          </a>
          <a href="#contact" className="px-6 py-3 bg-[#00ff00] text-black text-sm font-bold rounded-lg hover:bg-[#00cc2a] transition-all shadow-[0_0_20px_#00ff00]">
            Me Contacter
          </a>
        </div>
      </div>
    </section>
  );
}