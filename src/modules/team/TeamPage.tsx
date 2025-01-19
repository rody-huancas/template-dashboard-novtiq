import { useState } from "react";
/* Components */
import { Title } from "@/components/ui/title/Title";
import { Button } from "@/components/ui/button/Button";
import { MemberCard } from "@/components/modules/team/MemberCard";
/* Data */
import { contactData } from "@/data/contactData";
import { NewMemberModal } from "@/components/modules/team/NewMemberModal";

const TeamPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className="space-y-7">
        <div className="flex justify-between items-center">
          <Title size="h3">Equipo</Title>
          <Button onClick={() => setShowModal(true)}>Nuevo Miembro</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactData.map((member) => (
            <MemberCard
              key={member.id}
              name={member.name}
              email={member.email}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>

      {showModal && (
        <NewMemberModal
          showModal={showModal}
          onCloseModal={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default TeamPage;
