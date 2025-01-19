import { useState } from "react";
import Modal from "@/components/ui/modal/Modal";
import { Input } from "@/components/ui/input/Input";
import { Button } from "@/components/ui/button/Button";
import { FaMusic, FaLaptop, FaUsers } from "react-icons/fa";

interface Props {
  showModal: boolean;
  onCloseModal: () => void;
}

const NewEventModal = ({ showModal, onCloseModal }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [color, setColor] = useState("#818CF8");

  return (
    <Modal
      title="Nuevo Evento"
      size="3xl"
      isOpen={showModal}
      onClose={onCloseModal}
      closeOnOverlayClick={false}
      overlay="light"
    >
      <div>
        <Input
          label="Título"
          placeholder="Ingrese el título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          label="Descripción"
          placeholder="Ingrese una descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-4"
        />
        <Input
          label="Fecha de inicio"
          type="datetime-local"
          value={startDate ? startDate.toISOString().slice(0, 16) : ""}
          onChange={(e) => setStartDate(new Date(e.target.value))}
          className="mt-4"
        />
        <Input
          label="Fecha de fin"
          type="datetime-local"
          value={endDate ? endDate.toISOString().slice(0, 16) : ""}
          onChange={(e) => setEndDate(new Date(e.target.value))}
          className="mt-4"
        />
        <div className="mt-4">
          <label className="block text-sm font-medium">Color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="mt-2 w-12 h-8 border rounded"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">Icono</label>
          <div className="flex space-x-4">
            <Button>
              <FaLaptop />
            </Button>
            <Button>
              <FaMusic />
            </Button>
            <Button>
              <FaUsers />
            </Button>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button
            onClick={onCloseModal}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Crear Evento
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default NewEventModal;
