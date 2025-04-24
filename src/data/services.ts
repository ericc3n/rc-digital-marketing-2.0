import { IconType } from "react-icons";
import { FaHashtag, FaRocket } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { RiLayout2Fill } from "react-icons/ri";

interface ServiceType {
  Icon: IconType;
  title: string;
  description: string;
}

export const services: ServiceType[] = [
  {
    Icon: FaRocket,
    title: "Web app",
    description: "Dai vita ad una realtà di interazione con il tuo cliente automatizzata"
  },
  {
    Icon: RiLayout2Fill,
    title: "Portfolio",
    description: "Presenta professionalmente la tua attività online"
  },
  {
    Icon: FaHashtag,
    title: "SMM",
    description: "Sfrutta i social come una vetrina e amplia il tuo mercato"
  },
  {
    Icon: FaGear,
    title: "Gestionale",
    description: "Gestisci tutti i dati della tua azienda direttamente dal tuo PC"
  },
]