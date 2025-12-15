import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('accueil');

  const tabs = [
    { name: 'Accueil', id: 'accueil', href: '#accueil' },
    { name: 'À propos', id: 'apropos', href: '#apropos' },
    { name: 'Compétences', id: 'competences', href: '#competences' },
    { name: 'Projets', id: 'projets', href: '#projets' },
    { name: 'Expériences', id: 'experiences', href: '#experiences' },
    { name: 'Formation', id: 'formation', href: '#formation' },
    { name: 'Réalisations', id: 'realisations', href: '#realisations' },
    { name: 'Intérêts', id: 'interets', href: '#interets' },
    { name: 'Témoignages', id: 'temoignages', href: '#temoignages' },
    { name: 'Contact', id: 'contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 bg-[#010101]/80 backdrop-blur-xl border-b border-[#00ff00]/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      
      {/* ÉTAGE 1 : Identité Visuelle & Status */}
      <div className="max-w-[1300px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO MONOGRAMME "RH" (Design Cyber) */}
        <Link href="/" className="flex items-center gap-4 group">
           
           {/* Le Bloc Logo */}
           <div className="relative flex items-center justify-center w-11 h-11 rounded-lg bg-gradient-to-br from-[#0a1a0a] to-black border border-[#00ff00]/30 shadow-[0_0_15px_rgba(0,255,51,0.1)] group-hover:border-[#00ff00] group-hover:shadow-[0_0_20px_rgba(0,255,51,0.4)] transition-all duration-300">
              
              {/* Lettres RH */}
              <span className="font-black text-xl text-[#00ff00] tracking-tighter group-hover:scale-110 transition-transform duration-300" style={{ textShadow: '0 0 10px rgba(0,255,0,0.5)' }}>
                RH
              </span>
              
              {/* Petit indicateur de status (point vert) intégré au logo */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ff00] border-2 border-black"></span>
              </span>
           </div>
           
           {/* Nom & Titre */}
           <div className="flex flex-col justify-center">
             <span className="text-white font-bold text-lg tracking-wide group-hover:text-[#00ff00] transition-colors duration-300">
               Rockssan Hounton
             </span>
             <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition-colors">
               Ingénieur Aéro
             </span>
           </div>
        </Link>

        {/* Badge "Disponible" (Discret sur mobile, visible sur desktop) */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00ff00]/5 border border-[#00ff00]/20 hover:bg-[#00ff00]/10 transition-colors cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff00] shadow-[0_0_5px_#00ff00]"></span>
            <span className="text-[10px] font-bold text-[#00ff00] uppercase tracking-wider">Open to Work</span>
        </div>
      </div>

      {/* ÉTAGE 2 : Navigation Tabs (Design Épuré) */}
      <div className="max-w-[1300px] mx-auto px-6 overflow-x-auto scrollbar-hide">
        <div className="flex space-x-8 border-b border-white/5 min-w-max">
          {tabs.map((tab) => (
            <Link 
              key={tab.id}
              href={tab.href}
              onClick={() => setActiveTab(tab.id)}
              className="relative group py-3"
            >
              <span className={`text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'text-[#00ff00] drop-shadow-[0_0_8px_rgba(0,255,0,0.8)]' 
                    : 'text-slate-400 group-hover:text-white'
                }`}>
                {tab.name}
              </span>
              
              {/* Ligne active (Glow intense) */}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00ff00] shadow-[0_0_15px_#00ff00] rounded-t-full"></span>
              )}
              
              {/* Ligne hover (Subtile) */}
              <span className={`absolute bottom-0 left-0 h-[2px] bg-slate-600 transition-all duration-300 rounded-t-full ${
                  activeTab !== tab.id ? 'w-0 group-hover:w-full opacity-50' : 'w-0'
              }`}></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}