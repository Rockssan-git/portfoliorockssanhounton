export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Recherche de Stage Ouvrier",
      company: "Secteur Aéronautique / Industriel • Bordeaux",
      period: "Actuel",
      description: "Démarche active pour intégrer une chaîne de production ou un bureau d'études. Objectif : Appliquer mes connaissances en matériaux et processus industriels.",
      tags: ["Production", "Matériaux", "Process"],
      highlight: true
    },
    {
      id: 2,
      role: "Projet Universitaire Robotique",
      company: "2024 • Travail d'équipe",
      period: "",
      description: "Conception et programmation d'un micro-contrôleur pour un système automatisé. Gestion des capteurs et actionneurs.",
      tags: ["C++", "Électronique", "Arduino"],
      highlight: false
    }
  ];

  return (
    <section id="experiences" className="scroll-mt-36">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{color: 'var(--text-primary)'}}>
        <span className="text-[#00CCFF]">⚡</span> Expériences
      </h3>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div 
            key={exp.id} 
            className={`relative p-6 rounded-2xl border transition-all duration-300 group
              ${exp.highlight 
                ? 'bg-[var(--card-bg)] border-[#00CCFF] shadow-[0_0_15px_rgba(0,204,255,0.1)]' 
                : 'bg-[var(--card-bg)] border-[var(--card-border)] hover:border-[#00CCFF]/50'
              }`}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                <div>
                    <h4 className="text-lg font-bold" style={{color: 'var(--text-primary)'}}>{exp.role}</h4>
                    <p className="text-sm font-mono mt-1" style={{color: 'var(--text-secondary)'}}>{exp.company}</p>
                </div>
                {exp.period && (
                    <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${
                        exp.highlight ? 'bg-[#00CCFF] text-black' : 'bg-[#00CCFF]/10 text-[#00CCFF] border border-[#00CCFF]/30'
                    }`}>
                        {exp.period}
                    </span>
                )}
            </div>

            <p className="text-sm leading-relaxed mb-4 transition-colors duration-500 text-[var(--text-secondary)]">
                {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-1 rounded border border-[#00CCFF]/20 text-[var(--text-secondary)] bg-[#00CCFF]/5">
                        {tag}
                    </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}