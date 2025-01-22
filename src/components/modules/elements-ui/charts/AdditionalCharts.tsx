import {
  PieChart,
  Pie,
  ScatterChart,
  Scatter,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ComposedChart,
  Line,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const datosSector = [
  { nombre: "Tecnología", valor: 400 },
  { nombre: "Alimentación", valor: 300 },
  { nombre: "Transporte", valor: 300 },
  { nombre: "Educación", valor: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// Datos paa Scatter Chart
const datosDispersion = [
  { edad: 20, salario: 2400, experiencia: 2 },
  { edad: 25, salario: 3500, experiencia: 5 },
  { edad: 30, salario: 4500, experiencia: 7 },
  { edad: 35, salario: 5200, experiencia: 10 },
  { edad: 40, salario: 6000, experiencia: 15 },
];

const datosHabilidades = [
  { habilidad: "Programación", A: 120, B: 110 },
  { habilidad: "Diseño", A: 98, B: 130 },
  { habilidad: "Marketing", A: 86, B: 130 },
  { habilidad: "Ventas", A: 99, B: 100 },
  { habilidad: "Análisis", A: 85, B: 90 },
];

const datosCompuestos = [
  { mes: "Enero", ventas: 800, visitas: 1400, tasa: 60 },
  { mes: "Febrero", ventas: 967, visitas: 1506, tasa: 80 },
  { mes: "Marzo", ventas: 1098, visitas: 989, tasa: 70 },
  { mes: "Abril", ventas: 1200, visitas: 1228, tasa: 90 },
  { mes: "Mayo", ventas: 1108, visitas: 1100, tasa: 85 },
];

const AdditionalCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Distribución por Sector</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={datosSector}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={100}
              fill="#8884d8"
              dataKey="valor"
            >
              {datosSector.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Relación Edad-Salario</h3>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart>
            <CartesianGrid />
            <XAxis type="number" dataKey="edad" name="Edad" unit=" años" />
            <YAxis type="number" dataKey="salario" name="Salario" unit="€" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Legend />
            <Scatter name="Empleados" data={datosDispersion} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">
          Comparativa de Habilidades
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={datosHabilidades}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="habilidad" />
            <PolarRadiusAxis />
            <Radar
              name="Equipo A"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Radar
              name="Equipo B"
              dataKey="B"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
            <Legend />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Métricas Combinadas</h3>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={datosCompuestos}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="mes" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="ventas" fill="#8884d8" />
            <Area yAxisId="left" dataKey="visitas" fill="#82ca9d" />
            <Line yAxisId="right" dataKey="tasa" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdditionalCharts;
