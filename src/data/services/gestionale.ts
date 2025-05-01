import { FaBolt, FaUsers } from "react-icons/fa";
import { ServiceType } from "./webApp";
import { MdManageHistory } from "react-icons/md";
import { FaCloudArrowUp } from "react-icons/fa6";

export const services: ServiceType[] = [
  {
    Icon: FaBolt,
    title: "Velocizzazione dei processi"
  },
  {
    Icon: FaUsers,
    title: "Coordinazione del team"
  },
  {
    Icon: MdManageHistory,
    title: "Monitoraggio della situazione"
  },
  {
    Icon: FaCloudArrowUp,
    title: "Backup automatici"
  }
]