import { Title } from "@/components/ui/title/Title";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface DataItem {
  name: string;
  value: number;
}

const data: DataItem[] = [
  { name: "Ventas Online", value: 400 },
  { name: "Ventas Tienda", value: 300 },
  { name: "Mayoristas", value: 200 },
  { name: "Otros", value: 100 },
];

// Colores suaves pero no apagados
const COLORS: string[] = ["#6EA8FE", "#74C69D", "#FFD166", "#FF7F51"];

const SalesDistributionChart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="px-8 py-6">
        <Title size="h5">Distribución de ventas</Title>
      </div>

      <div className="w-full h-96 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={120}
              innerRadius={70}
              fill="#8884d8"
              dataKey="value"
              labelLine={false}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="vertical" align="right" verticalAlign="middle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesDistributionChart;
