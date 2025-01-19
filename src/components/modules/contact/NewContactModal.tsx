import Modal from "@/components/ui/modal/Modal";
import { Input } from "@/components/ui/input/Input";
import { Button } from "@/components/ui/button/Button";

interface Props {
  showModal: boolean;
  onCloseModal: () => void;
}

const NewContactModal = ({ showModal, onCloseModal }: Props) => {
  return (
    <Modal
      title="Nuevo Evento"
      size="3xl"
      isOpen={showModal}
      onClose={onCloseModal}
      closeOnOverlayClick={false}
      overlay="light"
    >
      <div className="flex flex-col gap-4">
        <Input label="Nombre" placeholder="Ingrese el nombre" />
        <div className="grid grid-cols-2 gap-4">
          <Input label="E-mail" placeholder="Ingrese el E-mail" />
          <Input label="Número de teléfono" placeholder="Número de teléfono" />
        </div>
        <Input label="Dirección" placeholder="Ingrese la dirección" />
        <div className="grid grid-cols-2 gap-4">
          <Input label="Ciudad" placeholder="Ingrese la ciudad" />
          <Input label="País" placeholder="Ingrese la país" />
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

export default NewContactModal;
