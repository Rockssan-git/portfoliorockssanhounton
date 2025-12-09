'use client'
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      // Récupération des projets depuis Supabase
      let { data, error } = await supabase.from('projects').select('*').order('id', { ascending: false });
      if (error) throw error;
      if (data) setProjects(data);
    } catch (error) {
      console.error("Erreur:", error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="projets" className="py-24 px-4 max-w-screen-xl mx-auto">
      
      {/* En-tête de section Professionnel */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">
          Projets Réalisés
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Une sélection de mes travaux techniques en ingénierie, développement et sécurité des systèmes.
        </p>
      </div>
      
      {loading ? (
        // Loader discret et pro
        <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-500"></div>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            
            // Carte "Tech Standard" (Sobre, Sombre, Élégante)
            <div key={project.id} className="group flex flex-col bg-[#0a140d] border border-green-900/30 rounded-xl overflow-hidden hover:border-green-500/40 hover:shadow-lg transition-all duration-300">
              
              {/* Zone Image / Icône */}
              <div className="h-48 bg-gradient-to-br from-[#0f2215] to-[#050e07] w-full flex items-center justify-center text-green-500/50 text-5xl border-b border-green-900/30 group-hover:text-green-400 transition-colors">
                {project.image_url ? (
                    <img src={project.image_url} alt={project.title} className="w-full h-full object-cover"/>
                ) : (
                    // Icône par défaut sobre (Laptop)
                    '💻'
                )}
              </div>
              
              {/* Contenu Textuel */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {project.title}
                </h3>
                
                <p className="mb-6 text-slate-400 text-sm leading-relaxed line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                {/* Tags Modernes (Style "Pill" arrondi) */}
                <div className="mt-auto pt-4 border-t border-green-900/30">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-900/20 text-green-400 border border-green-900/30">
                        {project.technologies}
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}