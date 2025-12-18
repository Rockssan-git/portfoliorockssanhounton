'use client'
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="apropos" className="scroll-mt-36">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="w-full md:w-auto flex justify-center md:justify-start sticky top-24 pb-6 md:pb-0">
           <div className="relative w-48 h-48 group select-none">
              <style jsx>{`
                .octagon-shape { clip-path: polygon(29.3% 0%, 70.7% 0%, 100% 29.3%, 100% 70.7%, 70.7% 100%, 29.3% 100%, 0% 70.7%, 0% 29.3%); }
                .neon-glow { position: absolute; inset: -8px; background: #00CCFF; filter: blur(25px); opacity: 0.4; transition: opacity 0.5s; z-index: 0; }
                .group:hover .neon-glow { opacity: 0.7; }
                .neon-tube { position: absolute; inset: 0; padding: 3px; background: linear-gradient(180deg, #00CCFF, #E0FFFF, #00CCFF); z-index: 1; }
                .image-mask { position: relative; width: 100%; height: 100%; background: #000; z-index: 2; overflow: hidden; }
              `}</style>
              <div className="neon-glow octagon-shape"></div>
              <div className="neon-tube octagon-shape shadow-[0_0_15px_rgba(0,204,255,0.6)]">
                  <div className="image-mask octagon-shape">
                       <img src="/images/profile.jpeg" alt="Photo de profil" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300" draggable="false" />
                  </div>
              </div>
           </div>
        </div>

        <div className="w-full md:flex-1 space-y-5 text-justify text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
           <p>
              <span className="text-[#00CCFF] font-medium italic text-lg">
              {t.about.quote}
              </span>
              {" "}{t.about.p1}
           </p>
           <p>{t.about.p2}</p>
           <p>{t.about.p3}</p>
           <p>{t.about.p4}</p>
           <p>{t.about.p5}</p>
           <p>{t.about.p6}</p>
           <p className="border-l-2 border-[#00CCFF] pl-4 italic bg-[#00CCFF]/5 py-2 pr-2 rounded-r">
              {t.about.p7}
           </p>
        </div>
      </div>
    </section>
  );
}