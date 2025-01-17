import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Title } from "@/components/ui/title/Title";

const data = [
  { name: "Ene", valor: 20 },
  { name: "Feb", valor: 70 },
  { name: "Mar", valor: 95 },
  { name: "Abr", valor: 70 },
  { name: "May", valor: 50 },
  { name: "Jun", valor: 90 },
  { name: "Jul", valor: 85 },
  { name: "Ago", valor: 115 },
  { name: "Sep", valor: 125 },
  { name: "Oct", valor: 155 },
  { name: "Nov", valor: 150 },
  { name: "Dic", valor: 115 },
];

const SalesDetailChart = () => {
  return (
    <div className="bg-light-100 rounded-lg">
      <div className="px-10 py-7">
        <Title size="h5">Detalles de Ventas</Title>
      </div>

      <div className="w-full h-96 pb-3">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 40,
              bottom: 20,
            }}
          >
            <defs>
              <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1E90FF" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#1E90FF" stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666" }}
              tickMargin={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666" }}
              tickMargin={25}
            />
            <Tooltip />
            <Area
              type="natural"
              dataKey="valor"
              stroke="#1E90FF"
              fill="url(#colorArea)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesDetailChart;
