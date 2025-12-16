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
            <label className="text-xs font-bold text-[#00ff00] uppercase tracking-wider mb-1 block">Identité</label>
            <input 
                type="text" 
                placeholder="Votre Nom" 
                className="w-full bg-black/40 border border-[#00ff00]/20 rounded p-3 text-white focus:border-[#00ff00] focus:outline-none transition-colors text-sm"
                // Note: On garde le fond noir ici pour le style "Terminal" même en light, ou on adapte si tu préfères
                onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
        </div>
        
        <div>
            <label className="text-xs font-bold text-[#00ff00] uppercase tracking-wider mb-1 block">Canal de Réponse (Email)</label>
            <input 
                type="email" 
                placeholder="nom@exemple.com" 
                className="w-full bg-black/40 border border-[#00ff00]/20 rounded p-3 text-white focus:border-[#00ff00] focus:outline-none transition-colors text-sm"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
        </div>

        <div>
            <label className="text-xs font-bold text-[#00ff00] uppercase tracking-wider mb-1 block">Transmission (Message)</label>
            <textarea 
                rows="4" 
                placeholder="Initialisation de la communication..." 
                className="w-full bg-black/40 border border-[#00ff00]/20 rounded p-3 text-white focus:border-[#00ff00] focus:outline-none transition-colors text-sm"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
        </div>

        <button type="submit" className="w-full py-3 bg-[#00ff00] hover:bg-[#00cc00] text-black font-bold rounded uppercase tracking-widest transition-all shadow-[0_0_15px_#00ff00]">
            Envoyer la Requête
        </button>

        {/* LIENS SOCIAUX (CORRECTION COULEUR) */}
        <div className="flex justify-center gap-6 pt-4 border-t border-[#00ff00]/20 mt-6">
            <a href="#" className="text-xs font-bold tracking-widest hover:text-[#00ff00] transition-colors" style={{color: 'var(--text-secondary)'}}>LINKEDIN</a>
            <a href="https://github.com/Rockssan-git" target="_blank" className="text-xs font-bold tracking-widest hover:text-[#00ff00] transition-colors" style={{color: 'var(--text-secondary)'}}>GITHUB</a>
        </div>
    </form>
  );
}