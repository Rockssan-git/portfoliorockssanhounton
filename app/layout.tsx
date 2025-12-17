import './globals.css';
import { LanguageProvider } from '../src/context/LanguageContext'; // <--- Import Important

export const metadata = {
  title: 'Portfolio Rockssan Hounton',
  description: 'Ingénieur Aéronautique',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <LanguageProvider>  {/* <--- On ajoute ça autour de children */}
           {children}
        </LanguageProvider> {/* <--- Fin du wrapper */}
      </body>
    </html>
  );
}