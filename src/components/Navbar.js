'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const pathname = usePathname();
  const { language, toggleLanguage, t } = useLanguage();
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // ORDRE DES ONGLETS
  const tabs = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.skills, href: '/skills' },
    { name: t.nav.experience, href: '/experience' },
    { name: t.nav.education, href: '/education' },
    { name: t.nav.distinctions, href: '/distinctions' },
    { name: t.nav.projects, href: '/projects' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--nav-border)] shadow-lg transition-colors duration-500">
      <div className="max-w-[1300px] mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4 group">
           <div className="relative flex items-center justify-center w-11 h-11 rounded-lg bg-gradient-to-br from-[var(--logo-bg-start)] to-[var(--logo-bg-end)] border border-[#00CCFF]/30 shadow-[0_0_15px_rgba(0,204,255,0.1)] group-hover:border-[#00CCFF] transition-all duration-300">
              <span className="font-black text-xl text-[#00CCFF] tracking-tighter">RH</span>
           </div>
           <div className="flex flex-col justify-center">
             <span className="text-[var(--text-primary)] font-bold text-lg tracking-wide group-hover:text-[#00CCFF] transition-colors duration-300">
               Rockssan HOUNTON
             </span>
             <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
               {t.nav.role}
             </span>
           </div>
        </Link>

        {/* CONTROLES (THEME + CV + LANGUE) */}
        <div className="flex items-center gap-3">
            
            {/* 1. BOUTON THEME (Lune/Soleil) */}
            <button onClick={toggleTheme} className="relative w-14 h-7 rounded-full bg-[var(--toggle-bg)] border border-[var(--toggle-border)] flex items-center justify-between px-1 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,204,255,0.2)] mr-2">
                <svg className={`w-3.5 h-3.5 z-10 transition-colors duration-300 ${theme === 'light' ? 'text-black' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                <svg className={`w-3.5 h-3.5 z-10 transition-colors duration-300 ${theme === 'dark' ? 'text-black' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                <span className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'}`}></span>
            </button>

            {/* 2. BOUTON CV (NOUVEAU) */}
            <a 
                href="https://cvdesignr.com/p/66faf1db57f46?hl=fr_FR" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--toggle-bg)] border border-[var(--toggle-border)] text-[var(--text-secondary)] font-bold text-xs hover:border-[#00CCFF] hover:text-[#00CCFF] transition-all duration-300 shadow-sm"
                title="Voir mon CV"
            >
                CV
            </a>

            {/* 3. BOUTON LANGUE (FR/AN) */}
            <button 
                onClick={toggleLanguage}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--toggle-bg)] border border-[var(--toggle-border)] text-[var(--text-secondary)] font-bold text-xs hover:border-[#00CCFF] hover:text-[#00CCFF] transition-all duration-300 shadow-sm"
            >
                {language === 'fr' ? 'FR' : 'EN'}
            </button>

        </div>
      </div>

      {/* NAVIGATION TABS */}
      <div className="max-w-[1300px] mx-auto px-6 overflow-x-auto scrollbar-hide">
        <div className="flex space-x-8 border-b border-[var(--nav-border)] min-w-max transition-colors duration-500">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link 
                key={tab.href}
                href={tab.href}
                className="relative group py-3"
              >
                <span className={`text-sm font-medium transition-all duration-300 ${
                  isActive ? 'text-[#00CCFF]' : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'
                }`}>
                  {tab.name}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00CCFF] shadow-[0_0_15px_#00CCFF] rounded-t-full"></span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}