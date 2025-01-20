import { Title } from "@/components/ui/title/Title";
import Card from "@/components/ui/card/Card";

export const ElementsCard = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title size="h6" level={6}>
        Card
      </Title>
      
      <Card title="Card Title">
        <p>This is some content inside the card.</p>
      </Card>
    </div>
  );
};
