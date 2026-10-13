import React, { useState, useEffect } from 'react';
import { Wine, Menu, X, MessageCircle } from 'lucide-react';
import { BRAND_NAME, WHATSAPP_URL } from '../data';
import { useMagnetic } from '../hooks/useMagnetic';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const magneticBtnRef = useMagnetic(0.25);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'A Loja', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização & Horários', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-primary/90 backdrop-blur-md border-b border-subtle py-3.5 shadow-deep'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Tipográfica Sofisticada */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md py-1"
            aria-label={`${BRAND_NAME} - Página Inicial`}
          >
            <div className="w-9 h-9 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center text-accent transition-transform duration-300 group-hover:scale-105 group-hover:border-accent">
              <Wine className="w-5 h-5 text-accent" strokeWidth={1.75} />
            </div>
            <span className="font-display text-2xl sm:text-3xl font-semibold tracking-wide text-ink-primary group-hover:text-accent transition-colors duration-200">
              {BRAND_NAME}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide font-medium text-ink-secondary">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-ink-primary transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <a
              ref={magneticBtnRef}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-bg-primary font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-accent-hover hover:shadow-glow-gold active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consultar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-ink-primary hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-bg-surface/98 backdrop-blur-xl border-b border-subtle px-6 pt-4 pb-8 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-ink-secondary hover:text-accent font-medium py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-bg-primary font-semibold text-base transition-all hover:bg-accent-hover shadow-glow-gold active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
