import ScrollArea from "@/components/ui/scroll-area/ScrollArea";
import { Title } from "@/components/ui/title/Title";

export const ElementsScrollArea = () => {
  return (
    <div className="space-y-4">
      <Title size="h6" level={6}>
        ScrollArea
      </Title>
      <ScrollArea className="h-40">
        <div className="space-y-4 p-4">
          {[...Array(10)].map((_, i) => (
            <p key={i}>Scrollable content item {i + 1}</p>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
