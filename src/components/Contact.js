import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:rockssanhounton@gmail.com?subject=Contact de ${formData.name}&body=${formData.message}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="text-xs font-bold text-[#00CCFF] uppercase tracking-wider mb-1 block">Identité</label>
            <input 
                type="text" 
                placeholder="Votre Nom" 
                className="w-full bg-black/40 border border-[#00CCFF]/20 rounded p-3 text-white focus:border-[#00CCFF] focus:outline-none transition-colors text-sm"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
        </div>
        
        <div>
            <label className="text-xs font-bold text-[#00CCFF] uppercase tracking-wider mb-1 block">Canal de Réponse (Email)</label>
            <input 
                type="email" 
                placeholder="nom@exemple.com" 
                className="w-full bg-black/40 border border-[#00CCFF]/20 rounded p-3 text-white focus:border-[#00CCFF] focus:outline-none transition-colors text-sm"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
        </div>

        <div>
            <label className="text-xs font-bold text-[#00CCFF] uppercase tracking-wider mb-1 block">Transmission (Message)</label>
            <textarea 
                rows="4" 
                placeholder="Initialisation de la communication..." 
                className="w-full bg-black/40 border border-[#00CCFF]/20 rounded p-3 text-white focus:border-[#00CCFF] focus:outline-none transition-colors text-sm"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
        </div>

        <button type="submit" className="w-full py-3 bg-[#00CCFF] hover:bg-[#0099cc] text-black font-bold rounded uppercase tracking-widest transition-all shadow-[0_0_15px_#00CCFF]">
            Envoyer la Requête
        </button>

        <div className="flex justify-center gap-6 pt-4 border-t border-[#00CCFF]/20 mt-6">
            <a href="#" className="text-xs font-bold tracking-widest hover:text-[#00CCFF] transition-colors" style={{color: 'var(--text-secondary)'}}>LINKEDIN</a>
            <a href="https://github.com/Rockssan-git" target="_blank" className="text-xs font-bold tracking-widest hover:text-[#00CCFF] transition-colors" style={{color: 'var(--text-secondary)'}}>GITHUB</a>
        </div>
    </form>
  );
}