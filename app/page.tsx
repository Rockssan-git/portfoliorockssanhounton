import PageLayout from '../src/components/PageLayout';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <PageLayout>
        <Navbar />
        <div className="max-w-[1300px] mx-auto px-6 pt-32 pb-20 w-full flex-grow flex flex-col justify-center">
            <Hero />
        </div>
        <Footer />
    </PageLayout>
  );
}