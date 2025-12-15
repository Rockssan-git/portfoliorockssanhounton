export default function Contact() {
  return (
    <section className="space-y-4">
      <form className="space-y-3">
        <div>
           <label className="text-xs font-mono text-[#00ff33] block mb-1">IDENTIFIANT (NOM)</label>
           <input type="text" className="w-full bg-black border border-[#00ff33]/30 rounded p-3 text-white text-sm focus:outline-none focus:border-[#00ff33] focus:shadow-[0_0_15px_rgba(0,255,51,0.2)] transition-all placeholder:text-slate-700" placeholder="Entrez votre nom..." />
        </div>
        <div>
           <label className="text-xs font-mono text-[#00ff33] block mb-1">CANAL DE RÉPONSE (EMAIL)</label>
           <input type="email" className="w-full bg-black border border-[#00ff33]/30 rounded p-3 text-white text-sm focus:outline-none focus:border-[#00ff33] transition-all placeholder:text-slate-700" placeholder="nom@exemple.com" />
        </div>
        <div>
           <label className="text-xs font-mono text-[#00ff33] block mb-1">TRANSMISSION (MESSAGE)</label>
           <textarea rows="4" className="w-full bg-black border border-[#00ff33]/30 rounded p-3 text-white text-sm focus:outline-none focus:border-[#00ff33] transition-all resize-none placeholder:text-slate-700" placeholder="Initialisation de la communication..."></textarea>
        </div>
        <button className="w-full py-3 bg-[#00ff33] hover:bg-[#00cc2a] text-black font-bold rounded shadow-[0_0_15px_#00ff33] transition-all transform active:scale-95">
           ENVOYER LA REQUÊTE
        </button>
      </form>
      
      <div className="flex justify-center gap-6 pt-4 border-t border-[#00ff33]/20">
         <a href="#" className="text-slate-500 hover:text-[#00ff33] transition-colors text-xs uppercase tracking-widest hover:shadow-[0_0_10px_#00ff33]">LinkedIn</a>
         <a href="#" className="text-slate-500 hover:text-[#00ff33] transition-colors text-xs uppercase tracking-widest hover:shadow-[0_0_10px_#00ff33]">GitHub</a>
      </div>
    </section>
  );
}