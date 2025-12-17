'use client'
import PageLayout from '../../src/components/PageLayout';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import Education from '../../src/components/Education';

export default function EducationPage() {
  return (
    <PageLayout>
        <Navbar />
        <div className="max-w-[1300px] mx-auto px-6 pt-40 pb-20 w-full min-h-screen">
             {/* Titre supprimé */}
            <Education />
        </div>
        <Footer />
    </PageLayout>
  );
}