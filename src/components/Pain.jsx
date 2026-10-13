import React from 'react';
import { motion } from 'framer-motion';
import { Wine, HeartHandshake, Compass, MessageCircle, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_URL, NEIGHBORHOOD } from '../data';
import { useMagnetic } from '../hooks/useMagnetic';

export default function Pain() {
  const magneticCtaRef = useMagnetic(0.25);

  const pillars = [
    {
      number: '01',
      icon: Wine,
      title: 'Rótulos para todos os gostos e bolsos',
      pain: 'O receio de entrar numa adega e só encontrar preços exorbitantes ou opções limitadas.',
      solution: 'Trabalhamos com curadoria criteriosa que une opções acessíveis de altíssima qualidade até rótulos especiais para momentos marcantes.',
      tag: 'Custo-benefício Real'
    },
    {
      number: '02',
      icon: HeartHandshake,
      title: 'Atendimento atencioso e da melhor qualidade',
      pain: 'A insegurança de comprar às cegas em gôndolas impessoais sem saber se o vinho vai agradar.',
      solution: 'Conversamos sobre o seu gosto, o prato que você vai servir e indicamos a garrafa perfeita sem afetação ou termos difíceis.',
      tag: 'Consultoria Descomplicada'
    },
    {
      number: '03',
      icon: Compass,
      title: 'Espaço acolhedor e charmoso no Jardim Colombo',
      pain: 'Lojas frias onde você não se sente à vontade para olhar as garrafas e tirar dúvidas.',
      solution: 'Um ambiente pensado para você se sentir em casa, apreciar cada detalhe das estantes e viver uma experiência agradável em São Paulo.',
      tag: 'Atmosfera Aconchegante'
    }
  ];

  return (
    <section id="sobre" className="py-24 sm:py-32 relative bg-bg-surface/50 border-t border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 text-accent text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Por que escolher o Vinhozin</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl sm:text-5xl font-normal text-ink-primary leading-tight"
          >
            Encontrar a garrafa certa não precisa ser um mistério ou um luxo inacessível.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-base sm:text-lg text-ink-secondary leading-relaxed font-light"
          >
            Muitas vezes escolher um bom vinho se torna cansativo por falta de ajuda real ou preços inflacionados. No {NEIGHBORHOOD}, criamos um refúgio pensado exatamente para descomplicar esse momento.
          </motion.p>
        </div>

        {/* Pilares em Layout Não Uniforme (Offsets e Tamanhos Variados) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            // Offsets sutis para dinamismo assimétrico no desktop
            const offsetClass = idx === 1 ? 'lg:translate-y-6' : idx === 2 ? 'lg:translate-y-12' : '';

            return (
              <motion.article
                key={pillar.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`relative bg-bg-elevated/80 backdrop-blur-sm border border-subtle rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-accent/40 transition-all duration-300 shadow-deep group ${offsetClass}`}
              >
                {/* Linha de topo com Numeração e Tag */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-display text-4xl sm:text-5xl font-light text-accent/30 group-hover:text-accent/60 transition-colors">
                      {pillar.number}
                    </span>
                    <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-accent/10 text-accent font-medium border border-accent/20">
                      {pillar.tag}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-ink-primary mb-4 leading-snug">
                    {pillar.title}
                  </h3>

                  <div className="space-y-3 text-sm text-ink-secondary leading-relaxed">
                    <p className="text-ink-muted line-through opacity-75">
                      {pillar.pain}
                    </p>
                    <p className="text-ink-primary/90 font-normal">
                      {pillar.solution}
                    </p>
                  </div>
                </div>

                {/* Filete decorativo na base */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-accent">
                  <span>Garantia de experiência autêntica</span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA Intermediário dos Pilares */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 lg:mt-28 text-center"
        >
          <a
            ref={magneticCtaRef}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-accent text-bg-primary font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-accent-hover hover:shadow-glow-gold active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Pedir Sugestão de Rótulo no WhatsApp</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
