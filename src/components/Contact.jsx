import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink, Calendar, Navigation } from 'lucide-react';
import { businessData, CLEAN_PHONE, GOOGLE_MAPS_URL, getScheduleStatus } from '../data';

export default function Contact() {
  const scheduleStatus = getScheduleStatus();
  const currentDayIndex = new Date().getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado

  // Mapeamento dos dias na ordem da lista original do JSON
  const dayIndices = {
    'segunda-feira': 1,
    'terça-feira': 2,
    'quarta-feira': 3,
    'quinta-feira': 4,
    'sexta-feira': 5,
    'sábado': 6,
    'domingo': 0
  };

  return (
    <section id="contato" className="py-24 sm:py-32 relative bg-bg-surface/60 border-t border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="inline-flex items-center gap-2 text-accent text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3"
          >
            <MapPin className="w-4 h-4" />
            <span>Visita Presencial & Contato</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.2 }}
            className="font-display text-3xl sm:text-5xl font-normal text-ink-primary leading-tight"
          >
            Venha nos visitar no Jardim Colombo.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-4 text-base sm:text-lg text-ink-secondary font-light"
          >
            Um espaço aconchegante para você escolher seus rótulos com calma e atenção.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Coluna da Esquerda: Dados de Endereço, Telefone e Como Chegar (6 colunas) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="bg-bg-elevated/80 border border-subtle rounded-2xl p-7 sm:p-8 space-y-6 shadow-deep">
              
              {/* Endereço */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-ink-muted font-semibold mb-1">
                    Endereço Completo
                  </h3>
                  <p className="text-ink-primary text-base sm:text-lg font-medium leading-relaxed">
                    {businessData.endereco}
                  </p>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-ink-muted font-semibold mb-1">
                    Telefone de Atendimento
                  </h3>
                  <a
                    href={`tel:${CLEAN_PHONE}`}
                    className="text-ink-primary text-base sm:text-lg font-medium hover:text-accent transition-colors block"
                  >
                    {businessData.telefone}
                  </a>
                  <p className="text-xs text-ink-muted mt-1">
                    Ligação direta ou mensagem pelo WhatsApp
                  </p>
                </div>
              </div>

              {/* Botão Como Chegar no Google Maps */}
              <div className="pt-2">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-bg-surface border border-accent/40 text-accent hover:bg-accent hover:text-bg-primary font-semibold text-base transition-all duration-300 shadow-md group"
                >
                  <Navigation className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  <span>Como Chegar (Abrir no Google Maps)</span>
                  <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                </a>
              </div>

            </div>

            {/* Banner de Status Atual */}
            <div className="p-5 rounded-xl bg-bg-surface border border-subtle flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full ${scheduleStatus.isOpen ? 'bg-emerald-500 animate-ping' : 'bg-amber-500/80'}`} />
                <div>
                  <p className="text-sm font-medium text-ink-primary">
                    Status: <span className="text-accent">{scheduleStatus.statusLabel}</span>
                  </p>
                  <p className="text-xs text-ink-muted">
                    {scheduleStatus.scheduleHint}
                  </p>
                </div>
              </div>
              <Clock className="w-5 h-5 text-accent/60" />
            </div>
          </motion.div>

          {/* Coluna da Direita: Tabela de Horários com Destaque do Dia Atual (6 colunas) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-bg-elevated/80 border border-subtle rounded-2xl p-7 sm:p-8 shadow-deep"
          >
            <div className="flex items-center justify-between pb-5 border-b border-white/5 mb-5">
              <div className="flex items-center gap-2 text-ink-primary font-display text-xl font-semibold">
                <Calendar className="w-5 h-5 text-accent" />
                <span>Horários de Funcionamento</span>
              </div>
              <span className="text-[11px] text-accent px-2.5 py-1 rounded bg-accent/10 border border-accent/20">
                Horário de Brasília
              </span>
            </div>

            <div className="space-y-2.5">
              {(businessData.horarios || []).map((item) => {
                const [dia, horario] = item.split(':').map((s) => s.trim());
                const dayIndex = dayIndices[dia.toLowerCase()];
                const isToday = dayIndex === currentDayIndex;
                const isClosed = horario.toLowerCase().includes('fechado');

                return (
                  <div
                    key={dia}
                    className={`flex items-center justify-between py-2.5 px-3.5 rounded-lg text-sm transition-colors ${
                      isToday
                        ? 'bg-accent/15 border border-accent/40 font-semibold text-ink-primary'
                        : 'text-ink-secondary hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {isToday && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      )}
                      <span className="capitalize">{dia}</span>
                      {isToday && (
                        <span className="text-[10px] text-accent uppercase font-bold tracking-wider ml-1 bg-accent/20 px-1.5 py-0.5 rounded">
                          Hoje
                        </span>
                      )}
                    </div>

                    <span
                      className={`font-mono text-xs sm:text-sm ${
                        isClosed ? 'text-ink-muted' : isToday ? 'text-accent font-semibold' : 'text-ink-primary/90'
                      }`}
                    >
                      {horario}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
