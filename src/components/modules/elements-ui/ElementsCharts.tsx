import { Title } from "@/components/ui/title/Title";
import LineCharts from "./charts/LineCharts";
import BarCharts from "./charts/BarCharts";
import AreaCharts from "./charts/AreaCharts";
import AdditionalCharts from "./charts/AdditionalCharts";

export const ElementsCharts = () => {
  return (
    <div className="flex flex-col gap-4">
      <Title size="h6" level={6}>
        Gráficos
      </Title>

      <div className="space-y-5 w-full">
        <LineCharts />
        <BarCharts />
        <AreaCharts />
        <AdditionalCharts />
      </div>
    </div>
  );
};
