'use client'
import PageLayout from '../../src/components/PageLayout';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import Achievements from '../../src/components/Achievements';

export default function DistinctionsPage() {
  return (
    <PageLayout>
        <Navbar />
        {/* J'ai supprimé tout le bloc de titre qui était ici */}
        <div className="max-w-[1300px] mx-auto px-6 pt-40 pb-20 w-full min-h-screen">
            {/* Le composant s'affiche directement, propre et sans doublon */}
            <Achievements />
        </div>
        <Footer />
    </PageLayout>
  );
}