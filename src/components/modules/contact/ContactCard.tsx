import { Button } from "@/components/ui/button/Button";
import { RiMessage3Line } from "react-icons/ri";

interface Contact {
  id: number;
  name: string;
  email: string;
  imageUrl: string;
}

interface ContactCardProps {
  contact: Contact;
}

export const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const { name, email, imageUrl } = contact;

  return (
    <div className="flex flex-col items-center gap-5 bg-light-100 rounded-xl shadow-lg">
      <img
        src={imageUrl}
        alt={`Foto de perfil de ${name}`}
        className="object-cover rounded-t-xl h-80 w-full"
      />

      <div className="py-7 px-10 flex flex-col items-center text-dark-100/80">
        <div className="flex flex-col gap-2 mb-6">
          <h4 className="text-3xl font-bold">{name}</h4>
          <span className="text-lg text-center">{email}</span>
        </div>
        <Button
          variant="outline"
          className="px-10 h-12 flex items-center justify-center gap-3 text-base"
        >
          <RiMessage3Line size={20} />
          Mensaje
        </Button>
      </div>
    </div>
  );
};
