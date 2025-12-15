export default function Experience() {
  return (
    <section id="experiences" className="scroll-mt-36">
       <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-yellow-500">⚡</span> Expériences
       </h3>
       
       <div className="space-y-4">
          {/* Card 1 */}
          <div className="spotlight-card rounded-xl p-6 backdrop-blur-sm border-l-2 border-l-yellow-500">
             <div className="card-content">
                <div className="flex justify-between items-start mb-2">
                   <h4 className="font-bold text-white text-lg">Recherche de Stage Ouvrier</h4>
                   <span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-500 text-xs font-mono border border-yellow-500/30">Actuel</span>
                </div>
                <p className="text-sm text-slate-400 mb-4">Secteur Aéronautique / Industriel • Bordeaux</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                   Démarche active pour intégrer une chaîne de production ou un bureau d'études. Objectif : Appliquer mes connaissances en matériaux et processus industriels.
                </p>
             </div>
          </div>

          {/* Card 2 */}
          <div className="spotlight-card rounded-xl p-6 backdrop-blur-sm border-l-2 border-l-slate-700 hover:border-l-yellow-500 transition-colors">
             <div className="card-content">
                <h4 className="font-bold text-white text-lg">Projet Universitaire Robotique</h4>
                <p className="text-sm text-slate-400 mb-2">2024 • Travail d'équipe</p>
                <p className="text-sm text-slate-300">
                   Conception et programmation d'un micro-contrôleur pour un système automatisé. Gestion des capteurs et actionneurs.
                </p>
             </div>
          </div>
       </div>
    </section>
  );
}