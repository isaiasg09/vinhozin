import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';
import { WHATSAPP_URL } from '../data';
import { useMagnetic } from '../hooks/useMagnetic';

export default function FinalCTA() {
  const magneticCtaRef = useMagnetic(0.3);

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-bg-surface via-wine-900/40 to-bg-primary border-t border-b border-subtle">
      {/* Luz ambiente dourada centralizada */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[350px] bg-accent/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs sm:text-sm font-medium tracking-wider uppercase mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Atendimento Direto & Personalizado</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-ink-primary leading-tight"
        >
          Pronto para abrir uma garrafa <span className="italic text-accent">memorável</span> hoje?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-ink-secondary max-w-2xl mx-auto font-light leading-relaxed"
        >
          Envie uma mensagem pelo WhatsApp para tirar dúvidas sobre rótulos, pedir recomendações sob medida ou reservar sua garrafa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10"
        >
          <a
            ref={magneticCtaRef}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-5 rounded-xl bg-accent text-bg-primary font-semibold text-lg tracking-wide transition-all duration-300 hover:bg-accent-hover hover:shadow-glow-gold active:scale-95"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Encontrar a Garrafa Ideal Agora</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
