export default function Hero() {
  return (
    <section className="pt-48 pb-32 relative flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
      
      {/* Badge Professionnel */}
      <div className="mb-8 inline-flex items-center gap-2 bg-green-900/20 border border-green-500/20 px-4 py-1.5 rounded-full backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-sm font-medium text-green-400 tracking-wide">
          À la recherche d'un stage ouvrier
        </span>
      </div>

      {/* NOM ET PRÉNOM (Correction demandée) */}
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
        Rockssan <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">HOUNTON</span>
      </h1>

      {/* Titre du poste / Études */}
      <h2 className="text-xl md:text-2xl text-slate-300 font-medium mb-8 max-w-2xl">
        Étudiant en Sciences pour l'Ingénieur à l'Université de Bordeaux
      </h2>

      {/* Description basée sur le CV */}
      <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10 mx-auto">
        Passionné par la <strong>conception aéronautique</strong> et les systèmes informatiques. 
        Je combine mes compétences en modélisation 3D et en développement pour concevoir des solutions innovantes.
        Proactif et créatif, je me prépare à mon futur métier d'ingénieur.
      </p>

      {/* Boutons d'action professionnels */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#contact" className="px-8 py-3.5 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-500 transition-all shadow-[0_0_20px_rgba(22,163,74,0.3)]">
          Me contacter
        </a>
        <a href="#projets" className="px-8 py-3.5 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-green-500/50 hover:text-white transition-all bg-slate-900/50">
          Découvrir mes projets
        </a>
      </div>

    </section>
  );
}