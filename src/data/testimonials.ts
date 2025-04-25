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
    domain: "studiocolore.it",
    quote: "Grazie al loro supporto abbiamo aumentato la nostra visibilità online in poche settimane.",
    serviceType: "Portfolio"
  },
  {
    imgSrc: `${ROUTE_PREFIX}/houselabmilan.png`,
    name: "House Lab Milan",
    domain: "houselabmilan.com",
    quote: "Strategie efficaci e risultati concreti: un team davvero competente.",
    serviceType: "Applicazione"
  }
];

export type { TestimonialType };