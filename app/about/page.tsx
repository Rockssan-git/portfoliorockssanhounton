'use client'
import PageLayout from '../../src/components/PageLayout';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import About from '../../src/components/About';

export default function AboutPage() {
  return (
    <PageLayout>
        <Navbar />
        {/* J'ai retiré le titre H1 ici */}
        <div className="max-w-[1300px] mx-auto px-6 pt-40 pb-20 w-full min-h-screen">
            <About />
        </div>
        <Footer />
    </PageLayout>
  );
}