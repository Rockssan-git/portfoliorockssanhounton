'use client'
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="scroll-mt-36">
      
      {/* Pas de titre H2/H3 ici pour éviter la répétition */}

      <div className="space-y-12">
        {t.experience.list.map((exp) => (
          <div 
            key={exp.id} 
            className="group relative rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#00CCFF]/30 transition-all duration-300 overflow-hidden"
          >
            {/* Effet lumineux léger sur le côté */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00CCFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="p-6 md:p-8">
              
              {/* En-tête de l'expérience */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-[#00CCFF] transition-colors">
                    {exp.role}
                  </h4>
                  <p className="text-lg font-medium text-[var(--text-secondary)]">
                    {exp.company}
                  </p>
                </div>
                <span className="inline-block px-3 py-1 text-xs font-bold text-[#00CCFF] bg-[#00CCFF]/10 rounded-full border border-[#00CCFF]/20 whitespace-nowrap">
                  {exp.date}
                </span>
              </div>

              {/* Description globale */}
              <p className="text-[var(--text-secondary)] mb-6 text-justify leading-relaxed">
                {exp.description}
              </p>

              {/* GRILLE DES MISSIONS (Si missions existe) */}
              {exp.missions && exp.missions.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {exp.missions.map((mission, index) => (
                    <div key={index} className="bg-black/20 p-4 rounded-lg border border-white/5 hover:border-[#00CCFF]/20 transition-colors">
                      <h5 className="font-bold text-[#00CCFF] text-sm mb-2 uppercase tracking-wide">
                        {mission.title}
                      </h5>
                      <ul className="space-y-1">
                        {mission.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-[#00CCFF] flex-shrink-0"></span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}