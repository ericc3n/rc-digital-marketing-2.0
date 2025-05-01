import { FaEye, FaGlobe } from "react-icons/fa";
import { ServiceType } from "./webApp";
import { Ri24HoursFill } from "react-icons/ri";

export const services: ServiceType[] = [
  {
    Icon: FaGlobe,
    title: "Visibilità",
    description: "Attira clienti non solo nella tua zona, ma anche a livello nazionale o internazionale "
  }, 
  {
    Icon: FaEye,
    title: "Credibilità",
    description: "Recensioni e progetti di successo, rafforza la tua reputazione e aiuta a convincere nuovi clienti"
  },
  {
    Icon: Ri24HoursFill,
    title: "Vetrina",
    description: "Potenziali clienti possono trovare informazioni sulla tua attività e contattarti 24/7"
  }
];