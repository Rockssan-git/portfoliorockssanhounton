'use client'
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';

export default function Projects() {
  const { t } = useLanguage();

  const projectImages = {
    p1: "/images/projects/p1.png",
    p2: "/images/projects/p2.png",
    p3: "/images/projects/p3.png"
  };

  const renderStackItem = (item) => {
    if (item.includes(':')) {
      const [label, content] = item.split(':');
      return (
        <span>
          <strong className="text-[var(--text-primary)]">{label}:</strong>{content}
        </span>
      );
    }
    return item;
  };

  const projectsList = t.projects ? [
    t.projects.p1,
    t.projects.p3,
    t.projects.p2
  ].filter(p => p && p.id) : [];

  return (
    <section id="projets" className="scroll-mt-36">
       
       <div className="grid grid-cols-1 gap-12">

          {projectsList.map((project) => {
            const isProjectActive = project.id === 'p1';
            const imageSrc = (project.id && projectImages[project.id]) || "/images/projects/p1.png";

            return (
            <div key={project.id || Math.random()} className="group relative rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#00CCFF]/50 transition-all duration-300 overflow-hidden">
                
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00CCFF] to-blue-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>

                <div className="relative p-6 md:p-8">
                  
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                      
                      <div className="flex items-center gap-4">
                          <img 
                              src={imageSrc}
                              alt={`Logo ${project.title}`}
                              className="w-16 h-16 object-contain rounded-lg bg-black/20"
                          />

                          <div>
                             <h4 className="text-2xl font-black text-[var(--text-primary)] mb-1 group-hover:text-[#00CCFF] transition-colors">
                                {project.title}
                             </h4>
                             <p className="text-2xl text-[#00CCFF] mt-1" style={{ fontFamily: '"Dancing Script", cursive' }}> 
                                {project.subtitle}
                             </p>
                          </div>
                      </div>

                      <div className="flex items-center gap-2 mt-1 md:mt-0">
                         <span className="relative flex h-2.5 w-2.5">
                           {isProjectActive && (
                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00CCFF] opacity-75"></span>
                           )}
                           <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00CCFF]"></span>
                         </span>
                         <span className="text-sm font-bold text-[var(--text-primary)] tracking-tight">
                            {project.date}
                         </span>
                      </div>
                  </div>

                  <p className="text-[var(--text-secondary)] leading-relaxed text-justify mb-8">
                      {project.desc}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                          <h5 className="text-sm font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                             <svg className="w-4 h-4 text-[#00CCFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                             {project.stackTitle}
                          </h5>
                          <ul className="space-y-2">
                             {project.stack?.map((tech, index) => (
                                <li key={index} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                                   <span className="text-[#00CCFF] text-xs mt-1">▹</span> 
                                   <span>{renderStackItem(tech)}</span>
                                </li>
                             ))}
                          </ul>
                      </div>

                      <div>
                          <h5 className="text-sm font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                             <svg className="w-4 h-4 text-[#00CCFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                             {project.featTitle}
                          </h5>
                          <ul className="space-y-2">
                             {project.features?.map((feat, index) => (
                                <li key={index} className="text-sm text-[var(--text-secondary)] flex items-center gap-2">
                                   <span className="text-[#00CCFF] text-xs">▹</span> 
                                   {feat}
                                </li>
                             ))}
                          </ul>
                      </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6 border-t border-[var(--card-border)]">
                      <a 
                        href={project.linkDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-[#00CCFF] text-black font-bold text-sm rounded hover:bg-[#0099cc] transition-all shadow-[0_0_15px_rgba(0,204,255,0.4)]"
                      >
                         {project.btnDemo}
                      </a>

                      <Link 
                        href="/contact" 
                        className="px-6 py-2.5 bg-transparent border border-[var(--text-secondary)] text-[var(--text-primary)] font-bold text-sm rounded hover:border-[#00CCFF] hover:text-[#00CCFF] transition-all flex items-center gap-2"
                      >
                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                         {project.btnRepo}
                      </Link>
                  </div>

               </div>
            </div>
          );})}

       </div>
    </section>
  );
}