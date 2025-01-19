import { Calendar } from "react-big-calendar";

import { Title } from "@/components/ui/title/Title";
import { EventsList } from "@/components/modules/calendar/EventsList";
import { calendarData } from "@/data/calendarData";
import { localizer, messages } from "@/utils/calendar-config.util";

import "react-big-calendar/lib/css/react-big-calendar.css";

const CalendarPage = () => {
  return (
    <div className="space-y-10">
      <Title size="h3">Calendario</Title>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <EventsList events={calendarData} />
        </div>

        <div className="md:col-span-3 bg-white p-4 rounded-lg shadow">
          <Calendar
            localizer={localizer}
            events={calendarData}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "calc(100vh - 200px)" }}
            messages={messages}
            culture="es"
            views={["month", "week", "day"]}
            eventPropGetter={(event) => ({
              style: {
                backgroundColor: event.color,
              },
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
