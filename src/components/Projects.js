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
      let { data, error } = await supabase.from('projects').select('*').order('id', { ascending: false });
      if (error) throw error;
      if (data) setProjects(data);
    } catch (error) {
      console.error("Erreur:", error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div className="p-8 text-center text-[#00ff33] animate-pulse font-mono">Chargement des données...</div>;
  if (!projects.length) return <div className="p-8 text-center text-slate-500">Aucun projet public.</div>;

  return (
    <div className="flex flex-col">
      {projects.map((project) => (
        <div key={project.id} className="group relative flex items-center justify-between p-5 border-b border-[#00ff33]/10 last:border-0 hover:bg-[#00ff33]/5 transition-all cursor-pointer overflow-hidden">
            
            {/* Barre latérale lumineuse au hover */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#00ff33] opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_#00ff33]"></div>

            <div className="flex items-center gap-4 z-10">
                <div className="h-12 w-12 rounded-lg bg-[#050a05] border border-[#00ff33]/20 flex items-center justify-center text-xl shadow-inner group-hover:border-[#00ff33]/50 group-hover:shadow-[0_0_10px_rgba(0,255,51,0.2)] transition-all">
                    {project.image_url ? <img src={project.image_url} className="w-full h-full object-cover rounded-lg"/> : '⚡'}
                </div>
                <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#00ff33] transition-colors flex items-center gap-2">
                        {project.title}
                        {/* Petit badge technologique */}
                        <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#00ff33]/10 text-[#00ff33] border border-[#00ff33]/20">
                           {project.technologies ? project.technologies.split(',')[0] : 'Dev'}
                        </span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1 max-w-md group-hover:text-slate-300">
                        {project.description}
                    </p>
                </div>
            </div>

            <div className="text-right z-10">
                <button className="text-xs font-bold text-slate-500 group-hover:text-[#00ff33] transition-colors flex items-center gap-1">
                   Voir <span className="text-lg">→</span>
                </button>
            </div>
        </div>
      ))}
    </div>
  );
}