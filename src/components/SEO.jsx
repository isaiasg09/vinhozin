import React, { useEffect } from 'react';
import { businessData, ADDRESS_DATA, BRAND_NAME, NICHE, NEIGHBORHOOD, CITY, parseScheduleItem } from '../data';

export default function SEO() {
  useEffect(() => {
    // Atualiza title dinamicamente
    const pageTitle = `${NICHE} em ${NEIGHBORHOOD}, ${CITY} | ${BRAND_NAME}`;
    document.title = pageTitle;

    // Converte horários de funcionamento para a especificação do Schema.org
    const dayMap = {
      'segunda-feira': 'Monday',
      'terça-feira': 'Tuesday',
      'quarta-feira': 'Wednesday',
      'quinta-feira': 'Thursday',
      'sexta-feira': 'Friday',
      'sábado': 'Saturday',
      'domingo': 'Sunday'
    };

    const openingHoursSpecs = (businessData.horarios || [])
      .map(item => parseScheduleItem(item))
      .filter(item => !item.isClosed && item.opens && item.closes)
      .map(item => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: dayMap[item.diaKey] || item.diaKey,
        opens: item.opens,
        closes: item.closes
      }));

    // Filtra redes sociais válidas para sameAs
    const sameAsList = Object.values(businessData.redes_sociais || {}).filter(
      url => typeof url === 'string' && url.trim().length > 0
    );

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'LiquorStore',
      'name': businessData.nome_completo_maps || businessData.nome,
      'alternateName': BRAND_NAME,
      'description': `Loja de vinhos com curadoria especial e atendimento dedicado no ${NEIGHBORHOOD}, ${CITY}. Rótulos selecionados para todos os gostos e preços justos.`,
      'image': businessData.fotos_local_maps?.[0] || '',
      'telephone': businessData.telefone,
      'url': window.location.origin,
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': ADDRESS_DATA.street,
        'addressLocality': ADDRESS_DATA.city,
        'addressRegion': ADDRESS_DATA.state,
        'postalCode': ADDRESS_DATA.postalCode,
        'addressCountry': 'BR'
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': Number(businessData.nota_geral || 5).toFixed(1),
        'bestRating': '5',
        'worstRating': '1',
        'reviewCount': businessData.avaliacoes_destaque?.length || 5
      },
      'openingHoursSpecification': openingHoursSpecs,
      'sameAs': sameAsList
    };

    // Remove script antigo se existir
    const existingScript = document.getElementById('json-ld-localbusiness');
    if (existingScript) {
      existingScript.remove();
    }

    // Injeta novo script JSON-LD
    const script = document.createElement('script');
    script.id = 'json-ld-localbusiness';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('json-ld-localbusiness');
      if (el) el.remove();
    };
  }, []);

  return null;
}
