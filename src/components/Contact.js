'use client'
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:rockssanhounton@gmail.com?subject=Contact de ${formData.name}&body=${formData.message}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="text-xs font-bold text-[#00CCFF] uppercase tracking-wider mb-1 block">{t.contact.labelName}</label>
            <input type="text" placeholder={t.contact.placeName} className="w-full bg-black/40 border border-[#00CCFF]/20 rounded p-3 text-white focus:border-[#00CCFF] focus:outline-none transition-colors text-sm" onChange={(e) => setFormData({...formData, name: e.target.value})} />
        </div>
        <div>
            <label className="text-xs font-bold text-[#00CCFF] uppercase tracking-wider mb-1 block">{t.contact.labelEmail}</label>
            <input type="email" placeholder={t.contact.placeEmail} className="w-full bg-black/40 border border-[#00CCFF]/20 rounded p-3 text-white focus:border-[#00CCFF] focus:outline-none transition-colors text-sm" onChange={(e) => setFormData({...formData, email: e.target.value})} />
        </div>
        <div>
            <label className="text-xs font-bold text-[#00CCFF] uppercase tracking-wider mb-1 block">{t.contact.labelMsg}</label>
            <textarea rows="4" placeholder={t.contact.placeMsg} className="w-full bg-black/40 border border-[#00CCFF]/20 rounded p-3 text-white focus:border-[#00CCFF] focus:outline-none transition-colors text-sm" onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
        </div>

        <button type="submit" className="w-full py-3 bg-[#00CCFF] hover:bg-[#0099cc] text-black font-bold rounded uppercase tracking-widest transition-all shadow-[0_0_15px_#00CCFF]">
            {t.contact.btn}
        </button>

        <div className="flex justify-center gap-6 pt-4 border-t border-[#00CCFF]/20 mt-6">
            <a href="#" className="text-xs font-bold tracking-widest hover:text-[#00CCFF] transition-colors" style={{color: 'var(--text-secondary)'}}>LINKEDIN</a>
            <a href="https://github.com/Rockssan-git" target="_blank" className="text-xs font-bold tracking-widest hover:text-[#00CCFF] transition-colors" style={{color: 'var(--text-secondary)'}}>GITHUB</a>
        </div>
    </form>
  );
}