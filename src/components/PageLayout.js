'use client'
import { useRef } from 'react';

export default function PageLayout({ children }) {
  const containerRef = useRef(null);
  
  const handleMouseMove = (e) => {
    const cards = document.getElementsByClassName("spotlight-card");
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <main 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[var(--bg-core)] text-[var(--text-primary)] font-sans selection:bg-[#00CCFF] selection:text-black relative overflow-hidden flex flex-col transition-colors duration-500"
    >
      <style jsx global>{`
        /* 1. VARIABLES MODE SOMBRE (CYAN EDITION) */
        :root {
            --bg-core: #010203; /* Noir légèrement bleuté très profond */
            --text-primary: #ffffff;
            --text-secondary: #94a3b8;
            --nav-bg: rgba(1, 2, 3, 0.8);
            --nav-border: rgba(0, 204, 255, 0.1); /* Cyan subtil */
            --toggle-bg: #0f172a;
            --toggle-border: #1e293b;
            --logo-bg-start: #020617;
            --logo-bg-end: #0f172a;
            
            /* Grilles Cyan */
            --grid-color-1: rgba(0, 204, 255, 0.05);
            --grid-color-2: rgba(0, 204, 255, 0.03);
            
            --card-bg: rgba(2, 10, 15, 0.8); /* Fond teinté cyan très sombre */
            --card-border: rgba(0, 204, 255, 0.15);
            --card-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
            --badge-bg: #020617;
            --badge-text: #cbd5e1;
        }

        /* 2. VARIABLES MODE CLAIR */
        [data-theme='light'] {
            --bg-core: #ffffff; 
            --text-primary: #000000;
            --text-secondary: #000000;
            --nav-bg: rgba(255, 255, 255, 0.95);
            --nav-border: rgba(0, 0, 0, 0.05);
            --toggle-bg: #f1f1f1;
            --toggle-border: #ccc;
            --logo-bg-start: #ffffff;
            --logo-bg-end: #f8f8f8;
            --grid-color-1: rgba(0, 204, 255, 0.03);
            --grid-color-2: rgba(0, 204, 255, 0.02);
            --card-bg: #ffffff; 
            --card-border: #e5e7eb;
            --card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            --badge-bg: #f1f5f9;
            --badge-text: #000000;
        }

        @keyframes structure-move {
            0% { background-position: 0 0; }
            100% { background-position: 50px 50px; }
        }
        .cyber-construct {
          position: absolute; inset: -50%;
          background-image: 
            linear-gradient(var(--grid-color-1) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-color-1) 1px, transparent 1px),
            linear-gradient(45deg, transparent 48%, var(--grid-color-2) 49%, var(--grid-color-2) 51%, transparent 52%);
          background-size: 50px 50px, 50px 50px, 100px 100px;
          transform: perspective(500px) rotateX(20deg);
          animation: structure-move 10s linear infinite;
          z-index: 0;
          transition: background-image 0.5s ease;
        }
        .spotlight-card {
          position: relative; 
          background-color: var(--card-bg);
          border: 1px solid var(--card-border); 
          overflow: hidden;
          backdrop-filter: blur(8px);
          box-shadow: var(--card-shadow);
          transition: all 0.3s;
          color: var(--text-primary);
        }
        .spotlight-card::before {
          content: ""; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          /* Lueur Cyan Souris */
          background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0, 204, 255, 0.1), transparent 40%);
          opacity: 0; transition: opacity 0.3s; pointer-events: none;
        }
        .spotlight-card:hover::before { opacity: 1; }
        .spotlight-card:hover { 
            border-color: #00CCFF; 
            box-shadow: 0 0 20px rgba(0, 204, 255, 0.2);
            transform: translateY(-2px);
        }
      `}</style>

      <div className="fixed inset-0 z-0 bg-[var(--bg-core)] transition-colors duration-500"></div>
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="cyber-construct"></div>
      </div>
      <div className="fixed inset-0 pointer-events-none z-1 bg-radial-vignette opacity-50 dark:opacity-100 transition-opacity duration-500 hidden dark:block"></div>

      <div className="relative z-10 flex-grow flex flex-col">
         {children}
      </div>
    </main>
  );
}