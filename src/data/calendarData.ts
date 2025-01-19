import { IconType } from "react-icons";
import { FaLaptop, FaMusic, FaUsers } from "react-icons/fa";

export interface Event {
  title: string;
  start: Date;
  end  : Date;
  color: string;
  icon : IconType;
}

export const calendarData: Event[] = [
  {
    title: "Design Conference",
    start: new Date(2024, 0, 4, 10, 0),
    end: new Date(2024, 0, 4, 12, 0),
    color: "#818CF8",
    icon: FaLaptop,
  },
  {
    title: "Weekend Festival",
    start: new Date(2024, 0, 17),
    end: new Date(2024, 0, 17),
    color: "#EC4899",
    icon: FaMusic,
  },
  {
    title: "Glastonbury Festival",
    start: new Date(2024, 0, 20),
    end: new Date(2024, 0, 22),
    color: "#F97316",
    icon: FaUsers,
  },
];
