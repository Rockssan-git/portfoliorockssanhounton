'use client'
import { useLanguage } from '../context/LanguageContext';

export default function Education() {
  const { t } = useLanguage();
  return (
    <section id="formation" className="scroll-mt-36">
       
       <div className="space-y-6">

           {/* --- FORMATION 1 : BORDEAUX --- */}
           {/* J'utilise 'flex' pour aligner Texte (gauche) et Logo (droite) proprement */}
           <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#00CCFF]/50 transition-all duration-300 group flex flex-col sm:flex-row items-center justify-between gap-6">
              
              <div className="flex-1 w-full">
                  <h4 className="text-lg font-bold leading-tight" style={{color: 'var(--text-primary)'}}>
                    {t.education.edu1.role}
                  </h4>
                  <p className="text-[#00CCFF] text-sm font-bold mt-1">
                    {t.education.edu1.school}
                  </p>
              </div>
              
              {/* Le Logo est maintenant dans le flux, il ne peut plus déborder */}
              <div className="shrink-0">
                  <img
                    src="/images/ubordeaux.jpg" 
                    alt="Logo Université de Bordeaux"
                    // J'ai ajouté 'rounded-md' pour adoucir les coins du fond blanc
                    className="w-32 h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300 rounded-md" 
                  />
              </div>
           </div>

           {/* --- FORMATION 2 : UNSTIM --- */}
           <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#00CCFF]/50 transition-all duration-300 group flex flex-col sm:flex-row items-center justify-between gap-6">
              
              <div className="flex-1 w-full">
                  <h4 className="text-lg font-bold leading-tight" style={{color: 'var(--text-primary)'}}>
                    {t.education.edu2.role}
                  </h4>
                  <p className="text-[#00CCFF] text-sm font-bold mt-1">
                    {t.education.edu2.school}
                  </p>
              </div>
              
              {/* Logo UNSTIM */}
              <div className="shrink-0">
                  <img
                    src="/images/unstim.webp" 
                    alt="Logo UNSTIM"
                    // w-24 (96px) est une bonne taille pour un logo carré
                    // rounded-xl permet d'arrondir le carré blanc pour faire un effet "badge"
                    className="w-24 h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  />
              </div>
           </div>

       </div>
    </section>
  );
}