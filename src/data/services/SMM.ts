import { FaEye } from "react-icons/fa";
import { ServiceType } from "./webApp";
import { BsMegaphoneFill } from "react-icons/bs";

export const services: ServiceType[] = [
  {
    Icon: BsMegaphoneFill,
    title: "Pubblicità",
    description: "Sempre attiva, ricca di informazioni riguardanti la tua attività"
  },
  {
    Icon: FaEye,
    title: "Vetrina",
    description: "Per creare una forte identità aziendale e attrarre nuovi clienti"
  }
];