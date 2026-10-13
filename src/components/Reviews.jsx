import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MessageCircle, ShieldCheck } from 'lucide-react';
import { businessData, WHATSAPP_URL, FORMATTED_RATING } from '../data';
import { useMagnetic } from '../hooks/useMagnetic';

export default function Reviews() {
  const [expandedReviews, setExpandedReviews] = useState({});
  const magneticCtaRef = useMagnetic(0.25);

  const toggleExpand = (idx) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const reviews = businessData.avaliacoes_destaque || [];

  return (
    <section id="avaliacoes" className="py-24 sm:py-32 relative bg-bg-surface border-t border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho de Prova Social com a Nota Geral em Destaque */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="inline-flex items-center gap-2 text-accent text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Avaliações Reais de Clientes</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              className="font-display text-3xl sm:text-5xl font-normal text-ink-primary leading-tight"
            >
              Reconhecido por quem realmente aprecia um bom vinho.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="mt-4 text-base sm:text-lg text-ink-secondary font-light"
            >
              Depoimentos espontâneos de clientes que visitaram nossa loja física e experimentaram nosso atendimento.
            </motion.p>
          </div>

          {/* Card de Nota Máxima no Google */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-bg-elevated/90 border border-accent/30 rounded-2xl p-6 sm:p-8 flex items-center gap-6 shadow-glow-gold"
          >
            <div>
              <div className="font-display text-5xl sm:text-6xl font-semibold text-accent leading-none">
                {FORMATTED_RATING}
              </div>
              <div className="text-xs uppercase tracking-wider text-ink-muted mt-2">
                Nota Geral
              </div>
            </div>

            <div className="border-l border-white/10 pl-6 space-y-1.5">
              <div className="flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent" />
                ))}
              </div>
              <div className="text-sm font-medium text-ink-primary">
                Avaliação Máxima
              </div>
              <div className="text-xs text-ink-muted">
                Avaliações no Google
              </div>
            </div>
          </motion.div>
        </div>

        {/* Grade de Depoimentos com Aspas Gigantes e Cards Sofisticados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => {
            const authorInitial = rev.autor ? rev.autor.charAt(0).toUpperCase() : 'C';
            const isLong = rev.texto && rev.texto.length > 140;
            const isExpanded = !!expandedReviews[idx];

            return (
              <motion.article
                key={rev.autor + idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative bg-bg-elevated/70 backdrop-blur-sm border border-subtle rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-accent/40 transition-all duration-300 shadow-deep group"
              >
                {/* Aspas Decorativas Gigantes em Marca d'Água */}
                <div className="absolute top-6 right-6 text-accent/10 group-hover:text-accent/20 transition-colors pointer-events-none">
                  <Quote className="w-12 h-12" />
                </div>

                <div>
                  {/* Estrelas */}
                  <div className="flex items-center gap-1 text-accent mb-5">
                    {[...Array(rev.nota || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent" />
                    ))}
                  </div>

                  {/* Texto da Avaliação (Íntegro, sem alterações) */}
                  {rev.texto ? (
                    <div className="text-ink-secondary text-sm sm:text-base leading-relaxed font-light mb-6">
                      <p className={!isExpanded && isLong ? 'line-clamp-4' : ''}>
                        "{rev.texto}"
                      </p>
                      {isLong && (
                        <button
                          onClick={() => toggleExpand(idx)}
                          className="mt-2 text-xs text-accent hover:underline font-medium focus-visible:outline-none"
                        >
                          {isExpanded ? 'Ler menos' : 'Ler mais...'}
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="text-ink-muted text-xs italic mb-6">
                      (Avaliou com 5 estrelas no Google)
                    </div>
                  )}
                </div>

                {/* Autor com Inicial estilizada */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-display font-semibold text-base">
                    {authorInitial}
                  </div>
                  <div>
                    <h3 className="font-medium text-ink-primary text-sm sm:text-base">
                      {rev.autor}
                    </h3>
                    <p className="text-xs text-ink-muted">
                      Avaliação verificada no Google
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA ao final da Prova Social */}
        <div className="mt-16 text-center">
          <a
            ref={magneticCtaRef}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent text-bg-primary font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-accent-hover hover:shadow-glow-gold active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Falar com Nossa Equipe no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
