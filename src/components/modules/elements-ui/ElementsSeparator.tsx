import Separator from "@/components/ui/separator/Separator";
import { Title } from "@/components/ui/title/Title";

export const ElementsSeparator = () => {
  return (
    <div className="space-y-4">
      <Title size="h6" level={6}>
        Separator
      </Title>
      <div>Content above</div>
      <Separator />
      <div>Content below</div>
    </div>
  );
};
