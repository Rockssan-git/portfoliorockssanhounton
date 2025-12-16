'use client'
import PageLayout from '../../src/components/PageLayout';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import Experience from '../../src/components/Experience';

export default function ExperiencePage() {
  return (
    <PageLayout>
        <Navbar />
        <div className="max-w-[1300px] mx-auto px-6 pt-40 pb-20 w-full min-h-screen">
            <h1 className="text-4xl font-bold mb-8 flex items-center gap-3" style={{color: 'var(--text-primary)'}}>
                <span className="text-[#00ff00]">⚡</span> Parcours Professionnel
            </h1>
            <Experience />
        </div>
        <Footer />
    </PageLayout>
  );
}