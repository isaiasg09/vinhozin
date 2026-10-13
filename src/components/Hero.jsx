import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { MessageCircle, Clock, MapPin, Sparkles } from 'lucide-react';
import { businessData, WHATSAPP_URL, NEIGHBORHOOD, CITY, getScheduleStatus } from '../data';
import { useMagnetic } from '../hooks/useMagnetic';

export default function Hero() {
  const containerRef = useRef(null);
  const magneticCtaRef = useMagnetic(0.3);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Parallax refinado para as imagens assimétricas (desativado se preferir redução de movimento)
  const yParallaxBack = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 80]);
  const yParallaxFront = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -60]);

  const scheduleInfo = getScheduleStatus();
  const heroImageBack = businessData.fotos_local_maps[0];
  const heroImageFront = businessData.fotos_local_maps[1];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-x-clip"
    >
      {/* Luz ambiente de fundo sutil (vinho e dourado) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-wine-800/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna de Conteúdo Editorial & Venda (7 colunas no desktop) */}
          <div className="lg:col-span-7 space-y-7 sm:space-y-8">
            
            {/* Tag Superior de Curadoria & Localização */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs sm:text-sm font-medium tracking-wider uppercase"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curadoria & Adega Boutique • {NEIGHBORHOOD}, {CITY}</span>
            </motion.div>

            {/* H1 de Venda com Tipografia Editorial Assimétrica */}
            <div className="space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-4xl sm:text-6xl xl:text-7xl font-normal tracking-tight text-ink-primary leading-[1.1]"
              >
                Vinhos selecionados com <span className="italic text-accent font-normal">curadoria acolhedora</span> no {NEIGHBORHOOD}.
              </motion.h1>
            </div>

            {/* Subtítulo Persuasivo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg lg:text-xl text-ink-secondary max-w-2xl font-light leading-relaxed"
            >
              Descubra rótulos escolhidos para todos os paladares e ocasiões, com preços justos e o atendimento dedicado que você merece para brindar com segurança.
            </motion.p>

            {/* Ações de Conversão e Horário Real */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 pt-2"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  ref={magneticCtaRef}
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-accent text-bg-primary font-semibold text-base sm:text-lg tracking-wide transition-all duration-300 hover:bg-accent-hover hover:shadow-glow-gold active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Escolher Meu Vinho no WhatsApp</span>
                </a>

                <a
                  href="#sobre"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-bg-surface border border-subtle text-ink-primary hover:border-accent hover:text-accent font-medium text-base transition-all duration-200"
                >
                  Conhecer Nossa Curadoria
                </a>
              </div>

              {/* Microcopy com Horário Real e Status */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-ink-muted pt-1">
                <div className="inline-flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${scheduleInfo.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500/80'}`} />
                  <span className="font-medium text-ink-secondary">{scheduleInfo.statusLabel}</span>
                </div>
                <span className="text-white/20 hidden sm:inline">•</span>
                <div className="inline-flex items-center gap-1.5 text-ink-muted">
                  <Clock className="w-3.5 h-3.5 text-accent/80" />
                  <span>Ter–Sex: 13h às 19h | Sáb: 10h às 14h</span>
                </div>
                <span className="text-white/20 hidden sm:inline">•</span>
                <div className="inline-flex items-center gap-1.5 text-ink-muted">
                  <MapPin className="w-3.5 h-3.5 text-accent/80" />
                  <span>R. Nilza Medeiros Martins, 187</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Coluna Visual: Composição de Tall Cards Assimétricos Sobrepostos (5 colunas) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] h-[480px] sm:h-[580px]">
              
              {/* Imagem Principal Maior de Fundo (Tall Card) */}
              <motion.div
                style={{ y: yParallaxBack }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-0 right-0 w-[82%] h-[85%] rounded-2xl overflow-hidden border border-subtle shadow-deep bg-bg-surface group"
              >
                <img
                  src={heroImageBack}
                  alt={`Garrafas e ambiente aconchegante da adega ${businessData.nome} no Jardim Colombo`}
                  referrerPolicy="no-referrer"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs tracking-wider text-ink-primary/90 font-light uppercase">
                  Curadoria Exclusiva
                </div>
              </motion.div>

              {/* Imagem Menor Sobreposta Quebrando o Grid na Frente */}
              <motion.div
                style={{ y: yParallaxFront }}
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-4 left-0 w-[62%] h-[60%] rounded-xl overflow-hidden border border-accent/40 shadow-glow-gold bg-bg-elevated group z-20"
              >
                <img
                  src={heroImageFront}
                  alt={`Rótulos selecionados e estantes de vinhos na adega ${businessData.nome}`}
                  referrerPolicy="no-referrer"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-[11px] text-accent font-medium tracking-wide">
                  Rótulos para Todos os Gostos
                </div>
              </motion.div>

              {/* Selo Decorativo de Excelência */}
              <div className="absolute -top-3 -left-3 z-30 bg-bg-surface/95 backdrop-blur-md border border-subtle rounded-xl p-3 shadow-deep hidden sm:block">
                <p className="text-[10px] uppercase tracking-widest text-ink-muted">Ambiente</p>
                <p className="font-display text-sm font-semibold text-accent">Aconchegante & Agradável</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
