'use client'
import PageLayout from '../../src/components/PageLayout';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import Contact from '../../src/components/Contact';

export default function ContactPage() {
  return (
    <PageLayout>
        <Navbar />
        
        {/* J'ai changé 'grid' par 'flex' pour centrer le contenu */}
        <div className="max-w-[1300px] mx-auto px-6 pt-40 pb-20 w-full min-h-screen flex flex-col items-center">
            
            {/* J'ai supprimé tout le bloc "Colonne Gauche" (Localisation/Email) */}
            
            {/* Colonne Droite (Formulaire) : Maintenant centrée et seule */}
            <div className="w-full max-w-2xl">
                {/* J'ai enlevé la classe 'spotlight-card' ici car le style est déjà géré DANS le composant Contact */}
                <Contact />
            </div>

        </div>
        <Footer />
    </PageLayout>
  );
}