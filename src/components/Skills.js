export default function Skills() {
    // Informations tirées directement du CV (Fusion 360, C++, Python, Hacking...)
    const skills = [
      { 
        category: "Ingénierie & Conception 3D", 
        description: "Modélisation et simulation de pièces complexes.",
        tools: "Fusion 360, AutoCAD", 
      },
      { 
        category: "Développement Logiciel", 
        description: "Programmation système et web.",
        tools: "C, C++, Python, Next.js", 
      },
      { 
        category: "Cybersécurité", 
        description: "Analyse de vulnérabilités et protection.",
        tools: "Hacking éthique, Kali Linux", 
      },
      { 
        category: "Data & IA", 
        description: "Automatisation et traitement de données.",
        tools: "Python, Analyse de données", 
      },
    ];
  
    return (
      <section id="skills" className="py-24 px-4 max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-4">Mes Compétences Techniques</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Un aperçu de mon bagage technique acquis durant ma formation universitaire et mes projets personnels.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            // Carte professionnelle sobre
            <div key={index} className="bg-[#0a140d] border border-green-900/30 p-8 rounded-xl hover:border-green-500/40 hover:shadow-lg transition-all duration-300 group">
              
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                {skill.category}
              </h4>
              
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {skill.description}
              </p>
              
              <div className="pt-4 border-t border-green-900/30">
                <p className="text-xs font-bold text-green-500 uppercase tracking-wide mb-1">
                  Outils maîtrisés
                </p>
                <p className="text-slate-300 text-sm font-medium">
                  {skill.tools}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}