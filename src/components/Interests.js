export default function Interests() {
  return (
    <section id="interets" className="scroll-mt-36 spotlight-card rounded-2xl p-6">
       <div className="card-content">
           <h3 className="text-lg font-bold text-white mb-4 border-b border-yellow-900/30 pb-2">Passions</h3>
           <div className="flex flex-wrap gap-2">
              {['Aéronautique', 'Impression 3D', 'SpaceX', 'IA', 'Basket'].map(i => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs text-slate-300 hover:border-yellow-500 hover:text-yellow-500 transition-colors">{i}</span>
              ))}
           </div>
       </div>
    </section>
  );
}