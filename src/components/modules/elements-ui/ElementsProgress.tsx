import Progress from "@/components/ui/progress/Progress";
import { Title } from "@/components/ui/title/Title";

export const ElementsProgress = () => {
  return (
    <div className="space-y-4">
      <Title size="h6" level={6}>
        Barra de Progreso
      </Title>
      <Progress value={75} max={100} />
    </div>
  );
};
