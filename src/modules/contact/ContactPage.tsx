import { useState } from "react";
/* Components */
import { Title } from "@/components/ui/title/Title";
import { Button } from "@/components/ui/button/Button";
import { ContactCard } from "@/components/modules/contact/ContactCard";
/* Data */
import { contactData } from "@/data/contactData";
/* Icons */
import { RiMessage3Line } from "react-icons/ri";
import NewContactModal from "@/components/modules/contact/NewContactModal";

const ContactPage: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className="space-y-7">
        <div className="flex justify-between items-center gap-10">
          <Title size="h3">Contactos</Title>

          <Button
            className="flex items-center justify-center gap-3 h-12"
            onClick={() => setShowModal(true)}
          >
            <RiMessage3Line size={20} />
            Nuevo Contacto
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {contactData.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>

      {showModal && (
        <NewContactModal
          showModal={showModal}
          onCloseModal={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ContactPage;
