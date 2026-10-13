import React from 'react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pain from './components/Pain';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-ink-primary selection:bg-accent selection:text-bg-primary relative">
      {/* SEO & JSON-LD Estruturado */}
      <SEO />

      {/* Grão Cinematográfico Sutil */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* 1. Navbar Sticky */}
      <Navbar />

      {/* 2. Hero Anti-Template com Composição Assimétrica e Parallax */}
      <main>
        <Hero />

        {/* 3. Dor → Solução e Pilares de Confiança */}
        <Pain />

        {/* 4. Galeria Bento Grid Assimétrica com Lightbox */}
        <Gallery />

        {/* 5. Prova Social com Nota 5,0 e Todas as Avaliações Reais */}
        <Reviews />

        {/* 6. Faixa de Conversão Final */}
        <FinalCTA />

        {/* 7. Contato, Localização e Horários de Funcionamento */}
        <Contact />
      </main>

      {/* 8. Rodapé Institucional e Redes Sociais */}
      <Footer />

      {/* 9. Botão Flutuante de WhatsApp */}
      <WhatsAppFloat />
    </div>
  );
}
