'use client'
import PageLayout from '../../src/components/PageLayout';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import Contact from '../../src/components/Contact';

export default function ContactPage() {
  return (
    <PageLayout>
        <Navbar />
        <div className="max-w-[1300px] mx-auto px-6 pt-40 pb-20 w-full min-h-screen">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                    <h1 className="text-4xl font-bold mb-6 flex items-center gap-3" style={{color: 'var(--text-primary)'}}>
                        <span className="text-[#00ff00]">📬</span> Me Contacter
                    </h1>
                    <p className="text-lg mb-8 leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                        Vous avez une opportunité de <strong>stage ouvrier</strong> ou un projet en conception aéronautique ?
                        <br/><br/>
                        Je suis disponible pour échanger sur vos besoins et vous démontrer ma motivation.
                    </p>
                    
                    <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)]">
                        <p className="text-sm font-mono mb-2" style={{color: 'var(--text-secondary)'}}>Localisation</p>
                        <p className="text-xl font-bold mb-4" style={{color: 'var(--text-primary)'}}>Bordeaux, France 🇫🇷</p>
                        
                        <p className="text-sm font-mono mb-2" style={{color: 'var(--text-secondary)'}}>Email</p>
                        <a href="mailto:rockssanhounton@gmail.com" className="text-xl font-bold text-[#00ff00] hover:underline">
                            rockssanhounton@gmail.com
                        </a>
                    </div>
                </div>

                <div className="spotlight-card p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)]">
                    <Contact />
                </div>
            </div>
        </div>
        <Footer />
    </PageLayout>
  );
}