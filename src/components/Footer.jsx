import React from 'react';
import { Wine, Instagram, Facebook, Globe, Linkedin, Youtube, Music2, Music, Link as LinkIcon } from 'lucide-react';
import { businessData, BRAND_NAME, NICHE, NEIGHBORHOOD, CITY } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Mapeamento dinâmico de ícones para redes sociais não-nulas
  const getSocialIcon = (key) => {
    switch (key.toLowerCase()) {
      case 'instagram':
        return Instagram;
      case 'facebook':
        return Facebook;
      case 'site_oficial':
      case 'website':
        return Globe;
      case 'linkedin':
        return Linkedin;
      case 'youtube':
        return Youtube;
      case 'tiktok':
        return Music2;
      case 'spotify':
        return Music;
      default:
        return LinkIcon;
    }
  };

  const activeSocials = Object.entries(businessData.redes_sociais || {}).filter(
    ([_, url]) => url && typeof url === 'string' && url.trim().length > 0
  );

  return (
    <footer className="bg-bg-primary border-t border-subtle py-12 sm:py-16 text-ink-secondary text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          
          {/* Identidade da Marca */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                <Wine className="w-4 h-4" />
              </div>
              <span className="font-display text-2xl font-semibold tracking-wide text-ink-primary">
                {BRAND_NAME}
              </span>
            </div>
            <p className="text-xs text-ink-muted">
              {NICHE} com curadoria dedicada em {NEIGHBORHOOD}, {CITY}.
            </p>
          </div>

          {/* Links Rápidos */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm tracking-wide font-medium">
            <a href="#sobre" className="hover:text-ink-primary transition-colors">A Loja</a>
            <a href="#galeria" className="hover:text-ink-primary transition-colors">Galeria</a>
            <a href="#avaliacoes" className="hover:text-ink-primary transition-colors">Avaliações</a>
            <a href="#contato" className="hover:text-ink-primary transition-colors">Localização</a>
          </nav>

          {/* Redes Sociais Dinâmicas (Apenas as não nulas) */}
          <div className="flex items-center gap-3">
            {activeSocials.map(([platform, url]) => {
              const Icon = getSocialIcon(platform);
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${BRAND_NAME} no ${platform}`}
                  className="w-10 h-10 rounded-full bg-bg-surface border border-subtle flex items-center justify-center text-ink-secondary hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

        </div>

        {/* Linha de Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-muted gap-4">
          <p>
            © {currentYear} {BRAND_NAME}. Todos os direitos reservados.
          </p>
          <p className="text-center sm:text-right">
            {businessData.nome_completo_maps || businessData.nome} • {businessData.endereco}
          </p>
        </div>
      </div>
    </footer>
  );
}
