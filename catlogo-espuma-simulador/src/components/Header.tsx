import { useState, useEffect } from 'react';

const logoImg = '/logo-seven-espumas.png';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Simulador', href: '#simulador' },
    { label: 'Preços', href: '#precos' },
    { label: 'Colchões', href: '#colchoes' },
    { label: 'Guia', href: '#guia' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-yellow-500 text-slate-900 text-center py-2 px-4 text-sm font-semibold">
        <i className="fa-solid fa-industry mr-2"></i>
        Direto de Fábrica — Espumas sob medida com o melhor custo-benefício
        <i className="fa-solid fa-industry ml-2"></i>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-strong shadow-lg shadow-black/20'
            : 'bg-slate-900/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <img
                src={logoImg}
                alt="Seven Espumas - Espumas Sob Medida"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-yellow-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Badge */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#simulador"
                className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 hover:scale-105 flex items-center gap-2"
              >
                <i className="fa-solid fa-calculator"></i>
                Simular Preço
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden glass-strong border-t border-white/10 animate-slide-up">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-300 hover:text-yellow-500 px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#simulador"
                onClick={() => setMenuOpen(false)}
                className="block bg-yellow-500 text-slate-900 px-4 py-3 rounded-xl text-sm font-bold text-center mt-3"
              >
                <i className="fa-solid fa-calculator mr-2"></i>
                Simular Preço
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Floating WhatsApp Badge */}
      <a
        href="https://wa.me/5541988442226"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 hover:scale-110 transition-all duration-300 animate-pulse-glow"
        aria-label="Contato WhatsApp"
      >
        <i className="fa-brands fa-whatsapp text-2xl sm:text-3xl"></i>
      </a>
    </>
  );
}
