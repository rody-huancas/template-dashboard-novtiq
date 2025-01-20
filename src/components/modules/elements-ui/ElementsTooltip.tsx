import { Title } from "@/components/ui/title/Title";
import Tooltip from "@/components/ui/tooltip/Tooltip";

export const ElementsTooltip = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title size="h6" level={6}>
        Tooltip
      </Title>

      <div className="flex gap-4 group">
        <button className="px-4 py-2 border rounded-md">
          Hover sobre mí
        </button>
        <Tooltip content="Este es un tooltip" />
      </div>
    </div>
  );
};
