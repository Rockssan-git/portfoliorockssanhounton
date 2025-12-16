'use client'
import PageLayout from '../../src/components/PageLayout';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import Achievements from '../../src/components/Achievements';

export default function DistinctionsPage() {
  return (
    <PageLayout>
        <Navbar />
        <div className="max-w-[1300px] mx-auto px-6 pt-40 pb-20 w-full min-h-screen">
            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4 flex items-center gap-3" style={{color: 'var(--text-primary)'}}>
                    <span className="text-[#00ff00]">🏆</span> Distinctions & Prix
                </h1>
                <p className="text-lg max-w-2xl" style={{color: 'var(--text-secondary)'}}>
                    Reconnaissance de mes performances lors de compétitions et hackathons nationaux.
                </p>
            </div>
            <Achievements />
        </div>
        <Footer />
    </PageLayout>
  );
}