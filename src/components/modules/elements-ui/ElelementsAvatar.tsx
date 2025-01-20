import Avatar from "@/components/ui/avatar/Avatar";
import { Title } from "@/components/ui/title/Title";

export const ElementsAvatar = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title size="h6" level={6}>
        Avatar
      </Title>

      <div className="flex gap-4">
        <div>
          <Avatar src="https://i.pravatar.cc/150?img=1" size="sm" />
        </div>

        <div>
          <Avatar src="https://i.pravatar.cc/150?img=2" size="md" />
        </div>

        <div>
          <Avatar src="https://i.pravatar.cc/150?img=3" size="lg" />
        </div>
      </div>
    </div>
  );
};
