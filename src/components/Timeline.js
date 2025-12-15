export default function Timeline() {
  const parcours = [
    { date: "2023 - Présent", title: "Licence Sciences pour l'Ingénieur", place: "Université de Bordeaux", description: "Spécialisation en cours. Mécanique, électronique, info." },
    { date: "2024", title: "Projets Fullstack", place: "Autodidacte", description: "Développement web avec React/Next.js." },
  ];

  return (
    <section className=""> {/* Retrait du padding */}
      <div className="relative border-l border-green-900/50 ml-2 space-y-6">
        {parcours.map((item, index) => (
          <div key={index} className="relative pl-6 group">
            <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-green-600 ring-4 ring-[#020a05] group-hover:bg-green-400 transition-all"></span>
            <div className="flex flex-col items-start mb-1">
              <h3 className="text-sm font-bold text-white group-hover:text-green-400 transition-colors">{item.title}</h3>
              <span className="text-[10px] font-mono text-green-500 bg-green-900/20 px-1 rounded border border-green-900/30 mt-1">{item.date}</span>
            </div>
            <p className="text-xs text-slate-300 mb-1">{item.place}</p>
            <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}