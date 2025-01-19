import { Modal as NovtiqModal } from "novtiq-modal";
import "novtiq-modal/dist/novtiq-modal.css";

interface ModalProps {
  isOpen              : boolean;
  onClose             : () => void;
  title?              : string;
  size?               : "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full";
  position?           : "top" | "center" | "bottom";
  overlay?            : "default" | "dark" | "light" | "none";
  closeOnOverlayClick?: boolean;
  closeOnEsc?         : boolean;
  children?           : React.ReactNode;
}

const Modal = (props: ModalProps) => {
  const {
    isOpen, onClose, title = "Default Title", size = "md", position = "center", overlay = "dark",
    closeOnOverlayClick = true, closeOnEsc = true, children,
  } = props;
  
  return (
    <NovtiqModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size={size}
      position={position}
      hasOverlay={true}
      overlay={overlay}
      closeOnOverlayClick={closeOnOverlayClick}
      closeOnEsc={closeOnEsc}
    >
      {children}
    </NovtiqModal>
  );
};

export default Modal;
