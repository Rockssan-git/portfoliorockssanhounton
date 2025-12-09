'use client'
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';

export default function Home() {
  return (
    // "font-sans" assure le style d'écriture standard des grands sites (propre et lisible)
    <main className="min-h-screen bg-[#020a05] text-white font-sans selection:bg-green-500 selection:text-black relative overflow-hidden">
      
      {/* --- CSS pour l'animation et le fond --- */}
      <style jsx global>{`
        @keyframes scanline {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        .scan-bar {
          position: fixed;
          left: 0;
          width: 100%;
          height: 2px; /* Plus fin pour faire plus pro */
          background: #22c55e;
          box-shadow: 0 0 10px #22c55e;
          z-index: 50;
          opacity: 0.3; /* Plus discret */
          animation: scanline 6s linear infinite; /* Plus lent */
          pointer-events: none;
        }
        .cyber-grid {
          background-color: #020a05;
          opacity: 0.3;
          background-image:  linear-gradient(#081c0f 1px, transparent 1px), linear-gradient(90deg, #081c0f 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>

      {/* Fond professionnel tech */}
      <div className="fixed inset-0 cyber-grid z-0 pointer-events-none"></div>
      <div className="scan-bar"></div>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-green-900/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        
        <footer className="bg-[#030f06] py-12 text-center border-t border-green-900/30 backdrop-blur-sm">
          <p className="text-slate-500 text-sm">
            © 2025 Rockssan Hounton. Tous droits réservés.
          </p>
        </footer>
      </div>
    </main>
  );
}