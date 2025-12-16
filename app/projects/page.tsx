'use client'
import PageLayout from '../../src/components/PageLayout';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import Projects from '../../src/components/Projects';

export default function ProjectsPage() {
  return (
    <PageLayout>
        <Navbar />
        <div className="max-w-[1300px] mx-auto px-6 pt-40 pb-20 w-full min-h-screen">
            <h1 className="text-4xl font-bold mb-8 flex items-center gap-3" style={{color: 'var(--text-primary)'}}>
                <span className="text-[#00ff00]">🚀</span> Projets
            </h1>
            <Projects />
        </div>
        <Footer />
    </PageLayout>
  );
}