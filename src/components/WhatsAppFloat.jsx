import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../data';

export default function WhatsAppFloat() {
  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-40">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-600 text-white shadow-2xl hover:bg-emerald-500 hover:scale-110 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
      >
        {/* Efeito de Pulso Sutil */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 pointer-events-none" />

        {/* Ícone */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white/20 transition-transform duration-300 group-hover:scale-110" />

        {/* Tooltip ao Hover no Desktop */}
        <span className="absolute right-full mr-3.5 px-3 py-1.5 rounded-lg bg-bg-surface border border-subtle text-ink-primary text-xs font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-deep hidden sm:block">
          Falar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
