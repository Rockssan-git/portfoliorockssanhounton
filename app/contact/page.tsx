'use client'
import PageLayout from '../../src/components/PageLayout';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import Contact from '../../src/components/Contact';

export default function ContactPage() {
  return (
    <PageLayout>
        <Navbar />
        
        {/* MODIFICATION ICI : J'ai changé pt-40 en pt-28 et ajouté justify-start */}
        <div className="max-w-[1300px] mx-auto px-6 pt-28 pb-20 w-full min-h-screen flex flex-col items-center justify-start">
            
            <div className="w-full max-w-2xl mt-8">
                <Contact />
            </div>

        </div>
        <Footer />
    </PageLayout>
  );
}