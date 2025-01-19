import Modal from "@/components/ui/modal/Modal";
import { Input } from "@/components/ui/input/Input";
import { Button } from "@/components/ui/button/Button";

interface Props {
  showModal: boolean;
  onCloseModal: () => void;
}

const NewTaskModal = ({ showModal, onCloseModal }: Props) => {
  return (
    <Modal
      title="Nueva Tarea"
      size="2xl"
      isOpen={showModal}
      onClose={onCloseModal}
      closeOnOverlayClick={false}
      overlay="light"
    >
      <div className="space-y-7 p-5">
        <div className="space-y-3">
          <Input label="Título" placeholder="Ingrese el título" />
          <Input label="Descripción" placeholder="Ingrese una descripción" />
          <div className="grid grid-cols-2 gap-5">
            <Input type="date" label="Fecha" />
            <Input type="time" label="Hora" />
          </div>
        </div>

        <Button size="lg" onClick={onCloseModal}>
          Registrar
        </Button>
      </div>
    </Modal>
  );
};

export default NewTaskModal;
