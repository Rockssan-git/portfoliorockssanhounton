'use client'
import { useLanguage } from '../context/LanguageContext';
// On importe les données depuis le nouveau fichier
import { distinctionsData } from '../constants/translations/distinctions'; // Assure-toi que le chemin est bon

export default function Distinctions() {
  const { language } = useLanguage();
  // On récupère la liste selon la langue (fr ou en)
  const data = distinctionsData[language] || distinctionsData.fr;

  return (
    <section id="distinctions" className="scroll-mt-36 space-y-4">
       
       {/* On boucle sur chaque distinction pour l'afficher */}
       {data.map((item) => (
         <div key={item.id} className="bg-[#00CCFF]/5 border border-[#00CCFF]/20 p-4 rounded-lg flex items-center gap-4 hover:bg-[#00CCFF]/10 hover:border-[#00CCFF]/50 transition-all group">
            
            {/* Icône (Trophée ou Médaille) */}
            <div className="text-4xl drop-shadow-[0_0_10px_rgba(192,192,192,0.5)]">
                {item.icon}
            </div>

            <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-2">
                    {/* Titre cliquable vers le PDF ou le site */}
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-bold transition-colors hover:text-[#00CCFF] hover:underline text-[var(--text-primary)]"
                    >
                      {item.title}
                    </a>
                    
                    {/* Badge (Lauréat / Leader) */}
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#00CCFF] text-black uppercase tracking-wide">
                       {item.badge}
                    </span>
                </div>

                <p className="text-sm mt-1 text-[var(--text-secondary)]">
                    {item.text}
                    <span className="font-bold text-[var(--text-secondary)]">
                      {item.team}
                    </span>
                </p>
            </div>
         </div>
       ))}

    </section>
  );
}