interface TestimonialType {
  imgSrc: string;
  name: string;
  domain: string;
  quote: string;
  serviceType: "Applicazione" | "Portfolio" | "SMM" | "Gestionale"
};

const ROUTE_PREFIX = '/testimonials-images';
export const testimonials: TestimonialType[] = [
  {
    imgSrc: `${ROUTE_PREFIX}/studiocolore.png`,
    name: "Studio Colore",
    domain: "studio-colore-test.vercel.app",
    quote: "Lavorare con loro è stato semplice e piacevole grazie alla loro professionalità e attenzione alle mie richieste. Hanno realizzato un sito web accattivante e facile da utilizzare.",
    serviceType: "Portfolio"
  },
  {
    imgSrc: `${ROUTE_PREFIX}/houselabmilan.png`,
    name: "House Lab Milan",
    domain: "houselabmilan.com",
    quote: "Società snella e fresca, tante idee a contenuti; hanno cercato di accontentare ed assecondare ogni richiesta, creando un sito funzionale e con possibilità di espansione e scalabilità.",
    serviceType: "Applicazione"
  }
];

export type { TestimonialType };