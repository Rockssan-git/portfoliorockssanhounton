'use client'
import PageLayout from '../../src/components/PageLayout';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import Skills from '../../src/components/Skills';

export default function SkillsPage() {
  return (
    <PageLayout>
        <Navbar />
        <div className="max-w-[1300px] mx-auto px-6 pt-40 pb-20 w-full min-h-screen">
            {/* Titres supprimés */}
            <Skills />
        </div>
        <Footer />
    </PageLayout>
  );
}