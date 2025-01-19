import { Title } from "@/components/ui/title/Title";

interface MemberCardProps {
  name: string;
  email: string;
  imageUrl: string;
}

export const MemberCard = ({ name, email, imageUrl }: MemberCardProps) => {
  return (
    <div className="px-10 py-16 bg-light-100 rounded-xl shadow">
      <div className="flex flex-col items-center justify-center gap-6">
        <img
          src={imageUrl}
          alt={`Foto de ${name}`}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="flex flex-col items-center gap-1">
          <Title size="h4" level={4}>
            {name}
          </Title>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

