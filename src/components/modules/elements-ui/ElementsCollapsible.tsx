import { Title } from "@/components/ui/title/Title";
import Collapsible from "@/components/ui/collapsible/Collapsible";

export const ElementsCollapsible = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title size="h6" level={6}>
        Collapsible
      </Title>

      <Collapsible trigger={<span>Click to Expand</span>}>
        <p>This is some content inside the collapsible section.</p>
      </Collapsible>
    </div>
  );
};
