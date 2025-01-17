import { Title } from "@/components/ui/title/Title";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "5k", sales: 25, profit: 35 },
  { name: "10k", sales: 30, profit: 65 },
  { name: "15k", sales: 28, profit: 45 },
  { name: "20k", sales: 25, profit: 35 },
  { name: "25k", sales: 45, profit: 40 },
  { name: "30k", sales: 30, profit: 50 },
  { name: "35k", sales: 85, profit: 45 },
  { name: "40k", sales: 35, profit: 55 },
  { name: "45k", sales: 45, profit: 40 },
  { name: "50k", sales: 65, profit: 35 },
  { name: "55k", sales: 45, profit: 70 },
  { name: "60k", sales: 55, profit: 85 },
];

const SalesAndProfitChart = () => {
  return (
    <div className="bg-light-100 rounded-lg">
      <div className="px-10 py-7">
        <Title size="h5">Ganancia</Title>
      </div>

      <div className="w-full h-96 pb-3">
        <ResponsiveContainer width="100%" height="90%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFA07A" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#FFA07A" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DDA0DD" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#DDA0DD" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666", fontSize: 12 }}
              dx={-10}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            />
            <Legend verticalAlign="top" height={36} iconType="circle" />
            <Area
              type="monotone"
              dataKey="sales"
              name="Ventas"
              stroke="#FFA07A"
              fill="url(#colorSales)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="profit"
              name="Beneficio"
              stroke="#DDA0DD"
              fill="url(#colorProfit)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesAndProfitChart;
