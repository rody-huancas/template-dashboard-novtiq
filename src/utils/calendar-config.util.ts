import { dateFnsLocalizer } from "react-big-calendar";
import * as dateFns from "date-fns";
import { es } from "date-fns/locale";

const locales = {
  es: es,
};

export const localizer = dateFnsLocalizer({
  format     : (date: Date, format: string) => dateFns.format(date, format, { locale: es }),
  parse      : dateFns.parse,
  startOfWeek: dateFns.startOfWeek,
  getDay     : dateFns.getDay,
  locales,
});

export const messages = {
  allDay  : "Todo el día",
  previous: "Anterior",
  next    : "Siguiente",
  today   : "Hoy",
  month   : "Mes",
  week    : "Semana",
  day     : "Día",
  agenda  : "Agenda",
  date    : "Fecha",
  time    : "Hora",
  event   : "Evento",
};
