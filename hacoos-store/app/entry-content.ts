import en from './content/entry-en.json';
import de from './content/entry-de.json';
import fr from './content/entry-fr.json';
import es from './content/entry-es.json';
import it from './content/entry-it.json';

export const entryContent = { en, de, fr, es, it };
export const shippingSources = [
  'https://web.hacoo.app/en-US/pages/shipping-info',
  'https://act.hacoo.app/eu/help-center/shipping/1',
] as const;
export const sizingSources = {
  en: ['https://www.nike.com/jp/en/size-fit/kids-footwear', 'https://www.nike.com/jp/en/size-fit/little-kids-clothing/'],
  de: ['https://www.nike.com/de/size-fit/kinderschuhe', 'https://www.nike.com/de/size-fit/bekleidung-fur-jungere-kinder'],
  fr: ['https://www.nike.com/fr/size-fit/chaussures-pour-enfant', 'https://www.nike.com/fr/size-fit/vetements-enfant'],
  es: ['https://www.nike.com/es/size-fit/ninos-calzado', 'https://www.nike.com/es/size-fit/ropa-para-nino'],
  it: ['https://www.nike.com/it/size-fit/scarpe-kids', 'https://www.nike.com/it/size-fit/abbigliamento-kids'],
} as const;
export const novemberRevision = '2026-11-05';
