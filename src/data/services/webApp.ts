import { IconType } from "react-icons";
import { FaGlobeEurope, FaLightbulb } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";

interface ServiceType {
  Icon: IconType;
  title: string;
  description?: string
};

export const services: ServiceType[] = [
  {
    Icon: FaLightbulb,
    title: "Adatta alle tue esigenze",
    description: "Una web app è realizzata, partendo dalle tue esigenze, per dare vita alle tue idee"
  },
  {
    Icon: IoSparkles,
    title: "Miglior esperienza",
    description: "L’utente riuscirà a navigare con facilità nella web app e rimarrà entusiasmato dalle grafiche"
  },
  {
    Icon: FaGlobeEurope,
    title: "Disponibile ovunque",
    description: "Basta una connessione internet per accedere alla web app da qualsiasi dispositivo"
  },
];

export type { ServiceType };