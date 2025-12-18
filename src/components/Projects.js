'use client'
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  return (
    <div className="p-8 text-center border border-dashed border-[var(--text-secondary)]/30 rounded-xl bg-[var(--card-bg)]">
       <p className="italic text-[var(--text-secondary)]">
          {t.projects.empty}
       </p>
    </div>
  );
}