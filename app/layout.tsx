import './globals.css';
import { LanguageProvider } from '../src/context/LanguageContext';

export const metadata = {
  title: 'Portfolio Rockssan Hounton',
  description: 'Ingénieur Aéronautique',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* --- AJOUT DE LA POLICE DANCING SCRIPT ICI --- */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
           {children}
        </LanguageProvider>
      </body>
    </html>
  );
}