'use client'
import { useEffect, useRef, useState } from 'react';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import Experience from '../src/components/Experience';
import Education from '../src/components/Education';
import Achievements from '../src/components/Achievements';
import Interests from '../src/components/Interests';
import Testimonials from '../src/components/Testimonials';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

export default function Home() {
  
  // Gestion des particules (Étoiles/Données)
  const [particles, setParticles] = useState<{id: number, top: number, left: number, duration: number, size: number}[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 10, // Vitesse variable
      size: Math.random() * 3 + 1
    }));
    setParticles(generatedParticles);
  }, []);

  // Gestion de l'effet Spotlight (Lampe torche souris)
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.getElementsByClassName("spotlight-card");
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <main 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#010201] text-white font-sans selection:bg-[#00ff00] selection:text-black relative overflow-hidden flex flex-col"
    >
      
      {/* =========================================
          DESIGN SYSTEM : "BIO-DIGITAL CORE"
          ========================================= */}
      <style jsx global>{`
        :root { --neon: #00ff00; }

        /* Animation : Défilement de la structure */
        @keyframes structure-move {
            0% { background-position: 0 0; }
            100% { background-position: 50px 50px; }
        }

        /* Animation : Respiration de la lumière */
        @keyframes toxic-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        /* Animation : Particules montantes */
        @keyframes float-up {
          from { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          to { transform: translateY(-100px); opacity: 0; }
        }

        /* COUCHE 1 : LA GRILLE COMPLEXE (Inspirée du design jaune) */
        .cyber-construct {
          position: absolute; inset: -50%;
          /* Motif complexe : Grille + Points + Lignes diagonales */
          background-image: 
            linear-gradient(rgba(0, 255, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.05) 1px, transparent 1px),
            linear-gradient(45deg, transparent 48%, rgba(0, 255, 0, 0.03) 49%, rgba(0, 255, 0, 0.03) 51%, transparent 52%);
          background-size: 50px 50px, 50px 50px, 100px 100px;
          transform: perspective(500px) rotateX(20deg);
          animation: structure-move 10s linear infinite;
          z-index: 0;
        }

        /* COUCHE 2 : LES ÉCLABOUSSURES DE LUMIÈRE (Le "Glow" intense) */
        .toxic-glow {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 255, 0, 0.4) 0%, rgba(0, 255, 0, 0.1) 40%, transparent 70%);
          filter: blur(60px);
          z-index: 0;
          animation: toxic-pulse 8s infinite ease-in-out;
          mix-blend-mode: screen; /* Fait "briller" le fond */
        }

        /* COUCHE 3 : PARTICULES NUMÉRIQUES */
        .data-particle {
          position: absolute;
          background: var(--neon);
          border-radius: 50%;
          box-shadow: 0 0 6px var(--neon); /* Halo autour du point */
          animation: float-up linear infinite;
        }

        /* COUCHE 4 : VIGNETTE + TEXTURE MATRIX */
        .overlay-matrix {
            position: fixed; inset: 0; pointer-events: none; z-index: 1;
            /* Texture de points fine */
            background-image: radial-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px);
            background-size: 4px 4px;
            opacity: 0.3;
        }
        .overlay-vignette {
            position: fixed; inset: 0; pointer-events: none; z-index: 2;
            background: radial-gradient(circle, transparent 40%, #000000 100%);
        }

        /* STYLES DES CARTES (Spotlight) */
        .spotlight-card {
          position: relative; 
          background-color: rgba(5, 10, 5, 0.8); /* Fond sombre teinté vert */
          border: 1px solid rgba(0, 255, 0, 0.15); 
          overflow: hidden;
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
          transition: border-color 0.3s, transform 0.3s;
        }
        .spotlight-card::before {
          content: ""; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          /* Lumière Souris Verte */
          background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0, 255, 0, 0.1), transparent 40%);
          opacity: 0; transition: opacity 0.3s; pointer-events: none;
        }
        .spotlight-card:hover::before { opacity: 1; }
        .spotlight-card:hover { 
            border-color: #00ff00; 
            box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
            transform: translateY(-2px);
        }
      `}</style>

      {/* === COUCHES D'ARRIÈRE-PLAN === */}
      <div className="fixed inset-0 z-0 bg-black"></div>
      
      {/* 1. Structure Géométrique (Grille 3D) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="cyber-construct"></div>
      </div>
      
      {/* 2. Lumières Toxiques (Positionnées aux coins) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="toxic-glow w-[800px] h-[800px] -top-32 -left-32 opacity-40"></div>
        <div className="toxic-glow w-[600px] h-[600px] top-[40%] right-[-10%] delay-1000 opacity-30"></div>
        <div className="toxic-glow w-[700px] h-[700px] -bottom-20 left-[20%] delay-2000 opacity-40"></div>
      </div>

      {/* 3. Particules Flottantes */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
            <div 
                key={p.id} 
                className="data-particle" 
                style={{
                    left: `${p.left}%`,
                    top: `${p.top}%`,
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    animationDuration: `${p.duration}s`
                }}
            ></div>
        ))}
      </div>

      {/* 4. Overlays de finition */}
      <div className="overlay-matrix"></div>
      <div className="overlay-vignette"></div>


      {/* === CONTENU DU SITE === */}
      <div className="relative z-10 flex-grow flex flex-col">
        <Navbar />

        <div className="max-w-[1300px] mx-auto px-6 pt-32 pb-20 w-full space-y-12">
          
          <div id="accueil" className="scroll-mt-36">
             <Hero />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Colonne Gauche */}
              <div className="lg:col-span-8 space-y-12">
                  <About />
                  
                  <div id="projets" className="scroll-mt-36">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#00ff00]/10 text-[#00ff00] border border-[#00ff00]/40 shadow-[0_0_10px_#00ff00]">🚀</span> 
                        Projets Récents
                    </h3>
                    <div className="spotlight-card rounded-2xl">
                        <div className="relative z-10">
                           <Projects />
                        </div>
                    </div>
                  </div>

                  <Experience />
                  <Education />
                  <Achievements />
              </div>

              {/* Colonne Droite */}
              <div className="lg:col-span-4 space-y-8">
                  <Skills />
                  <Interests />
                  <Testimonials />
                  
                  <div id="contact" className="scroll-mt-36 spotlight-card rounded-2xl bg-gradient-to-b from-[#00ff00]/10 to-black p-6 border border-[#00ff00]/40">
                      <div className="relative z-10">
                        <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                            <span className="text-[#00ff00] drop-shadow-[0_0_8px_#00ff00]">⚡</span> Me Contacter
                        </h3>
                        <Contact />
                      </div>
                  </div>
              </div>
          </div>

        </div>
        <Footer />
      </div>
    </main>
  );
}