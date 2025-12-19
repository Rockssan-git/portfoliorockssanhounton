'use client'
import { useState, useEffect, Suspense } from 'react'; // <--- J'ai ajouté Suspense ici
import { useLanguage } from '../context/LanguageContext';
import { useSearchParams } from 'next/navigation';

// 1. On crée un composant interne qui contient la logique "dynamique" (URL)
function ContactContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams(); 
  
  const isGithubRequest = searchParams.get('ref') === 'github';

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    if (isGithubRequest) {
      setFormData(prev => ({
        ...prev,
        message: "Bonjour Rockssan,\n\nJe suis intéressé par le projet District Zone 25 et je souhaiterais avoir accès au code source sur GitHub.\n\nCordialement,"
      }));
    }
  }, [isGithubRequest]);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:rockssanhounton@gmail.com?subject=Contact de ${formData.name}&body=${encodeURIComponent(formData.message)}`;
  };

  return (
    <div className="max-w-xl mx-auto">
      
      {/* MESSAGE DE SIGNAL */}
      {isGithubRequest && (
         <div className="mb-6 p-4 bg-[#00CCFF]/10 border border-[#00CCFF]/30 rounded-lg flex items-center gap-3 animate-fadeIn">
            <span className="text-[#00CCFF] text-xl">🔓</span>
            <p className="text-sm text-[#00CCFF]">
               Pour des raisons de confidentialité, l'accès au code est sur demande. <br/>
               <span className="font-bold">Remplissez ce formulaire pour recevoir l'accès.</span>
            </p>
         </div>
      )}

      {/* FORMULAIRE */}
      <form 
        onSubmit={handleSubmit} 
        className={`space-y-4 transition-all duration-500 rounded-xl p-6 ${
           isGithubRequest 
             ? 'bg-[#00CCFF]/5 border border-[#00CCFF] shadow-[0_0_30px_rgba(0,204,255,0.15)] scale-[1.02]' 
             : ''
        }`}
      >
          <div>
              <label className="text-xs font-bold text-[#00CCFF] uppercase tracking-wider mb-1 block">{t.contact.labelName}</label>
              <input type="text" placeholder={t.contact.placeName} className="w-full bg-black/40 border border-[#00CCFF]/20 rounded p-3 text-white focus:border-[#00CCFF] focus:outline-none transition-colors text-sm" onChange={(e) => setFormData({...formData, name: e.target.value})} value={formData.name} />
          </div>
          <div>
              <label className="text-xs font-bold text-[#00CCFF] uppercase tracking-wider mb-1 block">{t.contact.labelEmail}</label>
              <input type="email" placeholder={t.contact.placeEmail} className="w-full bg-black/40 border border-[#00CCFF]/20 rounded p-3 text-white focus:border-[#00CCFF] focus:outline-none transition-colors text-sm" onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} />
          </div>
          <div>
              <label className="text-xs font-bold text-[#00CCFF] uppercase tracking-wider mb-1 block">{t.contact.labelMsg}</label>
              <textarea 
                rows="6"
                placeholder={t.contact.placeMsg} 
                className="w-full bg-black/40 border border-[#00CCFF]/20 rounded p-3 text-white focus:border-[#00CCFF] focus:outline-none transition-colors text-sm" 
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                value={formData.message} 
              ></textarea>
          </div>

          <button type="submit" className="w-full py-3 bg-[#00CCFF] hover:bg-[#0099cc] text-black font-bold rounded uppercase tracking-widest transition-all shadow-[0_0_15px_#00CCFF]">
              {t.contact.btn}
          </button>

          <div className="flex justify-center gap-6 pt-4 border-t border-[#00CCFF]/20 mt-6">
              <a href="#" className="text-xs font-bold tracking-widest hover:text-[#00CCFF] transition-colors" style={{color: 'var(--text-secondary)'}}>LINKEDIN</a>
              <a href="https://github.com/Rockssan-git" target="_blank" className="text-xs font-bold tracking-widest hover:text-[#00CCFF] transition-colors" style={{color: 'var(--text-secondary)'}}>GITHUB</a>
          </div>
      </form>
    </div>
  );
}

// 2. Le composant Principal exporté ne sert plus qu'à "Envelopper" le contenu dans Suspense
export default function Contact() {
  return (
    // Fallback = ce qu'on affiche pendant le micro-chargement de l'URL (ici rien, juste une div vide)
    <Suspense fallback={<div className="text-center text-[#00CCFF]">Chargement...</div>}>
      <ContactContent />
    </Suspense>
  );
}