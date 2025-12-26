'use client'
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="scroll-mt-36">
      
      {/* GRILLE 2 COLONNES (Hard Skills / Soft Skills) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

        {/* --- COLONNE 1 : HARD SKILLS --- */}
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 hover:border-[#00CCFF]/30 transition-all duration-300">
          <h3 className="text-xl font-bold text-[#00CCFF] mb-6 flex items-center gap-3 border-b border-[#00CCFF]/20 pb-4">
            {t.skills.hardSkills.title}
          </h3>
          <div className="space-y-6">
            {t.skills.hardSkills.list.map((skill, index) => (
              <div key={index} className="group">
                <h4 className="font-bold text-white text-base mb-1 group-hover:text-[#00CCFF] transition-colors">
                  {skill.name}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed text-justify">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- COLONNE 2 : SOFT SKILLS --- */}
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-6 hover:border-[#00CCFF]/30 transition-all duration-300">
          <h3 className="text-xl font-bold text-[#00CCFF] mb-6 flex items-center gap-3 border-b border-[#00CCFF]/20 pb-4">
            {t.skills.softSkills.title}
          </h3>
          <div className="space-y-6">
            {t.skills.softSkills.list.map((skill, index) => (
              <div key={index} className="group">
                <h4 className="font-bold text-white text-base mb-1 group-hover:text-[#00CCFF] transition-colors">
                  {skill.name}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed text-justify">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}