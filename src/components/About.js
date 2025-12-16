export default function About() {
  return (
    <section id="apropos" className="scroll-mt-36">
      <div className="spotlight-card rounded-2xl p-8 backdrop-blur-sm border border-[#00ff00]/20">
         <div className="card-content space-y-8">
            
            {/* PARTIE 1 : BIO SYNTHÉTIQUE (Basée sur le CV) */}
            <div className="grid md:grid-cols-3 gap-8 items-start border-b border-[#00ff00]/20 pb-8">
                <div className="md:col-span-2 space-y-4">
                   <h2 className="text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                      <span className="text-[#00ff00]">✈️</span> Profil & Ambition
                   </h2>
                   <p className="text-slate-300 leading-relaxed text-sm">
                      Actuellement étudiant en <strong>1ère année de Licence Sciences pour l'Ingénieur</strong> à l'Université de Bordeaux, je construis mon parcours autour d'une double compétence : l'ingénierie mécanique et les technologies numériques.
                   </p>
                   <p className="text-slate-300 leading-relaxed text-sm">
                      Fort d'une maîtrise des outils de <strong>CAO (Fusion 360, AutoCAD)</strong> et de bases solides en programmation (C, C++, Python), je cherche à appliquer cette polyvalence technique dans le secteur aérospatial. Proactif et curieux, je suis à la recherche d'un <strong>stage ouvrier</strong> pour appréhender concrètement les réalités de production industrielle.
                   </p>
                   <div className="flex flex-wrap gap-3 pt-2">
                      <span className="px-3 py-1 rounded-full bg-[#00ff00]/10 text-[#00ff00] text-xs border border-[#00ff00]/30">Licence SPI (En cours)</span>
                      <span className="px-3 py-1 rounded-full bg-[#00ff00]/10 text-[#00ff00] text-xs border border-[#00ff00]/30">BAC S (Maths/Physique)</span>
                      <span className="px-3 py-1 rounded-full bg-[#00ff00]/10 text-[#00ff00] text-xs border border-[#00ff00]/30">Trilingue (FR/EN/Fon)</span>
                   </div>
                </div>
                
                {/* Petit bloc "Soft Skills" du CV */}
                <div className="bg-[#00ff00]/5 p-4 rounded-lg border border-[#00ff00]/10">
                    <h3 className="text-[#00ff00] font-bold text-sm mb-3 uppercase tracking-wider">Atouts</h3>
                    <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#00ff00] rounded-full"></span>Curiosité Scientifique</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#00ff00] rounded-full"></span>Adaptabilité</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#00ff00] rounded-full"></span>Compétitivité</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#00ff00] rounded-full"></span>Rigueur (Maths/Physique)</li>
                    </ul>
                </div>
            </div>

            {/* PARTIE 2 : TA PHILOSOPHIE (Le texte que tu as fourni) */}
            <div className="space-y-4">
               <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <span className="text-[#00ff00]">💡</span> Ma Vision de l'Innovation
               </h2>
               <div className="text-[var(--text-secondary)] text-sm leading-relaxed space-y-4 text-justify italic border-l-2 border-[#00ff00] pl-6">
                  <p>
                    "Courir derrière l’invention est souvent une course vaine vers l’inconnu, alors que l’innovation est une quête consciente vers la perfection. L’invention cherche à créer ce qui n’existe pas encore ; l’innovation, elle, révèle le potentiel caché de ce qui existe déjà."
                  </p>
                  <p>
                    "J’ai toujours cru que la véritable intelligence ne réside pas dans la volonté de tout réinventer, mais dans la capacité d’extraire du réel son plus haut degré d’efficacité, de beauté et d’harmonie. C’est dans cet esprit que je porte un regard exigeant sur les domaines où la perfection semble déjà acquise : <strong>l’aéronautique et le spatial</strong>."
                  </p>
                  <p>
                    "Mon ambition est claire : contribuer à la recherche et à l’innovation pour rendre l’aéronautique et le spatial toujours plus efficients, plus responsables, et pour rendre le transport aérien plus sûr."
                  </p>
                  <p>
                     "Partager, apprendre et construire ensemble sont pour moi les véritables moteurs du progrès car chaque rencontre peut être le point de départ d’une innovation qui transforme le ciel."
                  </p>
               </div>
            </div>

         </div>
      </div>
    </section>
  );
}