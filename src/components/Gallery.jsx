import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MessageCircle, Maximize2, Camera } from 'lucide-react';
import { businessData, WHATSAPP_URL, BRAND_NAME } from '../data';
import { useMagnetic } from '../hooks/useMagnetic';

export default function Gallery() {
  const [images, setImages] = useState(businessData.fotos_local_maps || []);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const magneticCtaRef = useMagnetic(0.25);

  // Spans balanceados para fechar o Bento Grid sem nenhum buraco
  const bentoSpans = [
    'md:col-span-8 md:row-span-2 h-[380px] sm:h-[460px]', // Foto 0: Grande Destaque
    'md:col-span-4 md:row-span-1 h-[220px]',             // Foto 1: Card Superior Direito
    'md:col-span-4 md:row-span-1 h-[220px]',             // Foto 2: Card Inferior Direito
    'md:col-span-4 md:row-span-2 h-[420px]',             // Foto 3: Tall Card Esquerdo
    'md:col-span-4 md:row-span-1 h-[200px]',             // Foto 4: Card Médio Centro
    'md:col-span-4 md:row-span-1 h-[200px]',             // Foto 5: Card Médio Direita
    'md:col-span-4 md:row-span-1 h-[200px]',             // Foto 6: Card Inferior Centro
    'md:col-span-4 md:row-span-1 h-[200px]',             // Foto 7: Card Inferior Direita
    'md:col-span-12 md:row-span-1 h-[260px]',            // Foto 8: Faixa Panorâmica de Fechamento
  ];

  const handleImageError = (indexToRemove) => {
    setImages((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  // Controle de teclado e travamento de scroll do Lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev + 1) % images.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightboxIndex, images.length]);

  return (
    <section id="galeria" className="py-24 sm:py-32 relative bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho Editorial */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="inline-flex items-center gap-2 text-accent text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3"
          >
            <Camera className="w-4 h-4" />
            <span>Galeria de Imagens</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            className="font-display text-3xl sm:text-5xl font-normal text-ink-primary leading-tight"
          >
            A atmosfera da nossa adega em cada detalhe.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-4 text-base sm:text-lg text-ink-secondary font-light"
          >
            Estantes preenchidas com cuidado, ambiente agradável e rótulos esperando para fazer parte da sua próxima comemoração.
          </motion.p>
        </div>

        {/* Bento Grid Assimétrico Dinâmico */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 sm:gap-6">
          {images.map((imgUrl, idx) => {
            const spanClass = bentoSpans[idx] || 'md:col-span-4 h-[240px]';

            return (
              <motion.div
                key={imgUrl}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                className={`group relative rounded-xl sm:rounded-2xl overflow-hidden border border-subtle bg-bg-surface cursor-pointer ${spanClass}`}
                onClick={() => setActiveLightboxIndex(idx)}
              >
                <img
                  src={imgUrl}
                  alt={`Acervo de vinhos e ambiente da adega ${BRAND_NAME} - Foto ${idx + 1}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  decoding="async"
                  onError={() => handleImageError(idx)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay de Vidro & Gradiente Escuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Botão de Ampliação ao Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-3 rounded-full bg-bg-primary/80 border border-accent/60 text-accent backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform duration-200 shadow-glow-gold">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 text-xs tracking-wider text-ink-primary/90 font-light drop-shadow">
                  Visualizar Detalhes
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA ao final da Galeria */}
        <div className="mt-14 sm:mt-16 text-center">
          <a
            ref={magneticCtaRef}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent text-bg-primary font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-accent-hover hover:shadow-glow-gold active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Consultar Disponibilidade na Adega</span>
          </a>
        </div>

      </div>

      {/* Lightbox em React Puro com Transições Framer Motion */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveLightboxIndex(null)}
          >
            {/* Botão Fechar */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-accent hover:text-bg-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Fechar galeria"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navegação Anterior */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
              }}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-accent hover:text-bg-primary transition-colors focus-visible:outline-none"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Imagem em Destaque */}
            <div
              className="max-w-5xl max-h-[85vh] relative flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[activeLightboxIndex]}
                alt={`Visualização ampliada da adega ${BRAND_NAME}`}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
              <p className="mt-3 text-xs sm:text-sm text-ink-muted">
                {activeLightboxIndex + 1} de {images.length} • {BRAND_NAME}
              </p>
            </div>

            {/* Navegação Próxima */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveLightboxIndex((prev) => (prev + 1) % images.length);
              }}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-accent hover:text-bg-primary transition-colors focus-visible:outline-none"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
