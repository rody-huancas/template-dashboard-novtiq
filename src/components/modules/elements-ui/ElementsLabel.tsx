import { Title } from "@/components/ui/title/Title";
import Label from "@/components/ui/label/Label";

export const ElementsLabel = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title size="h6" level={6}>
        Label
      </Title>

      <Label htmlFor="input-id" text="This is a label" />
    </div>
  );
};
