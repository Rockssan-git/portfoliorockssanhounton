export default function Education() {
  return (
    <section id="formation" className="scroll-mt-36">
       <h3 className="text-xl font-bold mb-6 flex items-center gap-2" style={{color: 'var(--text-primary)'}}>
          <span className="text-[#00ff00]">🎓</span> Formation
       </h3>

       <div className="relative p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[#00ff00]/50 transition-all duration-300 group">
          
          <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
              <div>
                  <h4 className="text-lg font-bold" style={{color: 'var(--text-primary)'}}>Licence Sciences pour l'Ingénieur</h4>
                  <p className="text-[#00ff00] text-sm font-bold">Université de Bordeaux • En cours</p>
              </div>
          </div>

          {/* ICI : LE TEXTE PASSE EN NOIR GRÂCE À LA VARIABLE */}
          <p className="text-sm leading-relaxed transition-colors duration-500 text-[var(--text-secondary)]">
              Spécialisation Mécanique & Électronique. Base solide en mathématiques appliquées et physique.
          </p>

          <div className="absolute top-0 right-0 w-20 h-20 bg-[#00ff00] opacity-5 rounded-bl-full pointer-events-none group-hover:opacity-10 transition-opacity"></div>
       </div>
    </section>
  );
}