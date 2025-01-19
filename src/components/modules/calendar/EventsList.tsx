import { Button } from "@/components/ui/button/Button";
import { FaPlus } from "react-icons/fa";
import * as dateFns from "date-fns";
import { es } from "date-fns/locale";
import { IconType } from "react-icons";
import { useState } from "react";
import NewEventModal from "./NewEventModal";

interface Event {
  title: string;
  start: Date;
  end  : Date;
  color: string;
  icon : IconType;
}

interface EventsListProps {
  events: Event[];
}

export const EventsList = ({ events }: EventsListProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className="space-y-4">
        <Button
          className="w-full bg-blue-500 hover:bg-blue-600"
          onClick={() => setShowModal(true)}
        >
          <FaPlus className="mr-2 h-4 w-4" />
          Añadir Nuevo Evento
        </Button>

        <div>
          <h3 className="font-medium mb-4">Próximos eventos</h3>
          <div className="space-y-4">
            {events.map((event, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: event.color }}
                >
                  <event.icon />
                </div>
                <div>
                  <h4 className="font-medium">{event.title}</h4>
                  <p className="text-sm text-gray-500">
                    {dateFns.format(event.start, "dd MMM yyyy", { locale: es })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <NewEventModal
          onCloseModal={() => setShowModal(false)}
          showModal={showModal}
        />
      )}
    </>
  );
};
