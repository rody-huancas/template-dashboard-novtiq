import Modal from "@/components/ui/modal/Modal";
import { Input } from "@/components/ui/input/Input";
import { Button } from "@/components/ui/button/Button";

interface Props {
  showModal: boolean;
  onCloseModal: () => void;
}

export const NewMemberModal = ({ showModal, onCloseModal }: Props) => {
  return (
    <Modal
      title="Nueva Miembro"
      size="2xl"
      isOpen={showModal}
      onClose={onCloseModal}
      closeOnOverlayClick={false}
      overlay="light"
    >
      <div className="space-y-7 p-5">
        <div className="space-y-3">
          <Input label="Nombre" placeholder="Ingrese el nombre" />
          <Input label="Dirección" placeholder="Ingrese una dirección" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input label="Fecha de Nacimiento" type="date" />
            <Input label="Lugar de Nacimiento" placeholder="Ingrese el lugar de nacimiento"  />
          </div>
          <Input label="E-mail" placeholder="Ingrese su E-mail" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input label="Teléfono" placeholder="Ingrese su teléfono" />
            <Input label="N° Documento de Identidad" placeholder="Ingrese su N° de documento"  />
          </div>
        </div>

        <Button size="lg" onClick={onCloseModal}>
          Registrar
        </Button>
      </div>
    </Modal>
  );
};
