export default function About() {
  return (
    <section id="apropos" className="scroll-mt-36">
      
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
        
        {/* --- 1. LE CADRE OCTOGONAL NÉON (Taille Réduite & Style Réaliste) --- */}
        <div className="w-full md:w-1/3 flex justify-center sticky top-24 pb-8 md:pb-0">
           
           {/* TAILLE RÉDUITE : w-60 h-60 (avant c'était w-72 h-72) */}
           <div className="relative w-60 h-60 group">

              <style jsx>{`
                /* Forme Octogonale */
                .octagon-shape {
                    clip-path: polygon(29.3% 0%, 70.7% 0%, 100% 29.3%, 100% 70.7%, 70.7% 100%, 29.3% 100%, 0% 70.7%, 0% 29.3%);
                }

                /* 1. L'Aura Lumineuse (Glow) - Derrière */
                .neon-glow {
                    position: absolute;
                    inset: -5px;
                    background: conic-gradient(from 0deg, #00CCFF, #00ffea, #00CCFF, #0077ff, #00CCFF);
                    filter: blur(20px);
                    opacity: 0.5;
                    transition: opacity 0.3s ease;
                    z-index: 0;
                }
                .group:hover .neon-glow {
                    opacity: 0.8; /* S'illumine plus fort au survol */
                    filter: blur(25px);
                }

                /* 2. Le Tube Néon (Bordure) - Dégradé subtil */
                .neon-border {
                    position: absolute;
                    inset: 0;
                    /* Variation légère des couleurs pour l'effet "Tube" 3D */
                    background: linear-gradient(135deg, #00CCFF 0%, #E0FFFF 50%, #00CCFF 100%);
                    z-index: 1;
                }

                /* 3. Le Masque Intérieur (Noir) pour créer l'épaisseur du tube */
                .image-container {
                    position: absolute;
                    inset: 3px; /* Épaisseur du tube néon (3px) */
                    background: #000;
                    z-index: 2;
                }
              `}</style>

              {/* COUCHE 1 : La lumière diffuse (Glow) */}
              <div className="neon-glow octagon-shape animate-pulse-slow"></div>

              {/* COUCHE 2 : Le tube physique (Bordure) */}
              <div className="neon-border octagon-shape"></div>

              {/* COUCHE 3 : L'image */}
              <div className="image-container octagon-shape">
                   <img 
                     src="/images/profile.jpeg" 
                     alt="Rockssan Hounton" 
                     className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                   />
              </div>

           </div>
        </div>

        {/* --- 2. L'AUTOBIOGRAPHIE (Texte Justifié) --- */}
        <div className="w-full md:w-2/3 space-y-6 text-justify text-[var(--text-secondary)] leading-relaxed">
           <p>
              <span className="text-[#00CCFF] font-medium italic">
              « Courir derrière l’invention est souvent une course vaine vers l’inconnu, alors que l’innovation est une quête consciente vers la perfection ».
              </span>
              {" "}Ainsi se forge ma pensée sur le sens véritable de l’innovation.
           </p>
           <p>
              L’invention cherche à créer ce qui n’existe pas encore ; l’innovation, elle, révèle le potentiel caché de ce qui existe déjà. L’une naît souvent du hasard, l’autre exige la rigueur, l’observation et la compréhension profonde des limites actuelles pour les transcender. J’ai toujours cru que la véritable intelligence ne réside pas dans la volonté de tout réinventer, mais dans la capacité d’extraire du réel son plus haut degré d’efficacité, de beauté et d’harmonie. Car rien, même dans nos plus grandes avancées technologiques, n’est jamais achevé. Tout reste perfectible ; et c’est dans cette zone subtile entre l’existant et le possible que s’écrit le vrai progrès.
           </p>
           <p>
              C’est dans cet esprit que je porte un regard exigeant sur les domaines où la perfection semble déjà acquise, mais où tant de défis demeurent encore à relever : l’aéronautique et le spatial.
           </p>
           <p>
              L’aéronautique et le spatial incarnent pour moi ce défi permanent : concilier performance, sécurité, et durabilité dans un environnement où chaque gramme, chaque degré, chaque décibel compte. Ce sont des domaines fascinants mais encore confrontés à des enjeux cruciaux : consommation énergétique élevée, empreinte carbone, bruit, fatigue des matériaux, turbulence atmosphérique, fiabilité des systèmes embarqués ou encore coûts d’exploitation et maintenance.
           </p>
           <p>
              Mon ambition est claire : contribuer à la recherche et à l’innovation pour rendre l’aéronautique et le spatial toujours plus efficients, plus responsables, et pour rendre le transport aérien plus sûr.
           </p>
           <p>
              Je crois profondément que le progrès n’est jamais une aventure solitaire. C’est dans la coopération, la synergie des talents et la curiosité partagée que naissent les vraies révolutions techniques. C’est cette conviction qui guide mon parcours, et qui nourrit ma détermination à évoluer dans ce secteur stratégique du développement mondial.
           </p>
           <p>
              Toujours animé par cette passion, je reste ouvert à toute discussion, collaboration ou échange d’idées autour de ce domaine qui me fascine tant. Partager, apprendre et construire ensemble sont pour moi les véritables moteurs du progrès car chaque rencontre peut être le point de départ d’une innovation qui transforme le ciel.
           </p>
        </div>
      </div>
    </section>
  );
}