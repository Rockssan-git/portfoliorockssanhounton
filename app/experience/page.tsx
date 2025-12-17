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
             {/* Titre supprimé */}
            <Experience />
        </div>
        <Footer />
    </PageLayout>
  );
}