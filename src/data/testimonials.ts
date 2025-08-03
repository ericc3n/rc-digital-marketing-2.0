interface TestimonialType {
  imgSrc: string;
  name: string;
  domain: string;
  quote: string;
  date: string;   // ISO format: yyyy-mm-dd
  serviceType: "Applicazione" | "Portfolio" | "SMM" | "Gestionale"
};

const ROUTE_PREFIX = '/testimonials-images';
export const testimonials: TestimonialType[] = [
  {
    imgSrc: `${ROUTE_PREFIX}/trattoriasanbernardo.jpg`,
    name: "Trattoria San Bernardo",
    domain: "trattoriasanbernardo.it",
    quote: "Collaborazoione con Studiocolore. Team giovane e affidabile, sempre attento alle esigenze; hanno proposto soluzioni creative e su misura, realizzando un sito moderno, distintivo e pronto a crescere nel tempo.",
    serviceType: "Applicazione",
    date: '2025-07-31'
  },
  {
    imgSrc: `${ROUTE_PREFIX}/studiocolore.png`,
    name: "Studio Colore",
    domain: "studio-colore-test.vercel.app",
    quote: "Lavorare con loro è stato semplice e piacevole grazie alla loro professionalità e attenzione alle mie richieste. Hanno realizzato un sito web accattivante e facile da utilizzare.",
    serviceType: "Portfolio",
    date: '2025-03-31'
  },
  {
    imgSrc: `${ROUTE_PREFIX}/houselabmilan.png`,
    name: "House Lab Milan",
    domain: "houselabmilan.com",
    quote: "Società snella e fresca, tante idee e contenuti; hanno cercato di accontentare ed assecondare ogni richiesta, creando un sito funzionale e con possibilità di espansione e scalabilità.",
    serviceType: "Applicazione",
    date: '2025-04-24'
  },
];

export type { TestimonialType };