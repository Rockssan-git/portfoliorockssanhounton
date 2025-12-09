import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 border-b border-green-900/20 bg-[#020a05]/80 backdrop-blur-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center gap-2">
            {/* Initials simples et pro */}
            <div className="w-8 h-8 rounded bg-green-600 flex items-center justify-center text-white font-bold text-sm">RH</div>
            <span className="text-lg font-semibold text-white tracking-tight">
              Rockssan Hounton
            </span>
        </Link>
        
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-row space-x-8 items-center">
            {['À propos', 'Compétences', 'Projets'].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase().replace(' ', '')}`} className="text-sm font-medium text-slate-300 hover:text-green-400 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
            <li>
                <Link href="#contact" className="text-sm font-medium text-white bg-green-700 px-5 py-2.5 rounded-lg hover:bg-green-600 transition-colors">
                  Me Contacter
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}