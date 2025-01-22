import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const traficoWeb = [
  { hora: "00:00", usuarios: 4000, sesiones: 2400, vistas: 2400 },
  { hora: "04:00", usuarios: 3000, sesiones: 1398, vistas: 2210 },
  { hora: "08:00", usuarios: 2000, sesiones: 9800, vistas: 2290 },
  { hora: "12:00", usuarios: 2780, sesiones: 3908, vistas: 2000 },
  { hora: "16:00", usuarios: 1890, sesiones: 4800, vistas: 2181 },
  { hora: "20:00", usuarios: 2390, sesiones: 3800, vistas: 2500 },
];

const gastosMensuales = [
  { mes: "Enero", marketing: 4000, operaciones: 2400, tecnologia: 2400 },
  { mes: "Febrero", marketing: 3000, operaciones: 1398, tecnologia: 2210 },
  { mes: "Marzo", marketing: 2000, operaciones: 9800, tecnologia: 2290 },
  { mes: "Abril", marketing: 2780, operaciones: 3908, tecnologia: 2000 },
  { mes: "Mayo", marketing: 1890, operaciones: 4800, tecnologia: 2181 },
];

const rendimientoDeportivo = [
  { semana: 1, velocidad: 80, resistencia: 70, fuerza: 65 },
  { semana: 2, velocidad: 85, resistencia: 75, fuerza: 70 },
  { semana: 3, velocidad: 87, resistencia: 80, fuerza: 73 },
  { semana: 4, velocidad: 90, resistencia: 82, fuerza: 78 },
  { semana: 5, velocidad: 93, resistencia: 85, fuerza: 80 },
];

const AreaCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Tráfico Web Diario</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={traficoWeb}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hora" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="usuarios"
              fill="#8884d8"
              stroke="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Distribución de Gastos</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={gastosMensuales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="marketing"
              stackId="1"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="operaciones"
              stackId="1"
              fill="#82ca9d"
              stroke="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="tecnologia"
              stackId="1"
              fill="#ffc658"
              stroke="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Métricas de Rendimiento</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={rendimientoDeportivo}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="semana" />
            <YAxis />
            <Tooltip />
            <Legend />
            <defs>
              <linearGradient id="colorVel" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorRes" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorFue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="velocidad"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorVel)"
            />
            <Area
              type="monotone"
              dataKey="resistencia"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorRes)"
            />
            <Area
              type="monotone"
              dataKey="fuerza"
              stroke="#ffc658"
              fillOpacity={1}
              fill="url(#colorFue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaCharts;
