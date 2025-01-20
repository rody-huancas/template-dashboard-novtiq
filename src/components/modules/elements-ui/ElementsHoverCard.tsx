import HoverCard from "@/components/ui/hover-card/HoverCard";
import { Title } from "@/components/ui/title/Title";

export const ElementsHoverCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title size="h6" level={6}>
        HoverCard
      </Title>

      <HoverCard content="This is the hover card content">
        <button>Hover over me!</button>
      </HoverCard>
    </div>
  );
};
