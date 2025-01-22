import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const ventasMensuales = [
  { mes: "Enero", ventas: 4000, clientes: 2400, ingresos: 6000 },
  { mes: "Febrero", ventas: 3000, clientes: 1398, ingresos: 5000 },
  { mes: "Marzo", ventas: 2000, clientes: 9800, ingresos: 4000 },
  { mes: "Abril", ventas: 2780, clientes: 3908, ingresos: 3500 },
  { mes: "Mayo", ventas: 1890, clientes: 4800, ingresos: 7000 },
  { mes: "Junio", ventas: 2390, clientes: 3800, ingresos: 8500 },
];

const temperaturas = [
  { ciudad: "Madrid", maxima: 25, minima: 15, media: 20 },
  { ciudad: "Barcelona", maxima: 23, minima: 16, media: 19 },
  { ciudad: "Sevilla", maxima: 32, minima: 20, media: 26 },
  { ciudad: "Valencia", maxima: 27, minima: 18, media: 22 },
];

const LineCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Ventas Mensuales</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={ventasMensuales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="ventas" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Métricas de Negocio</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={ventasMensuales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="ventas" stroke="#8884d8" />
            <Line type="monotone" dataKey="clientes" stroke="#82ca9d" />
            <Line type="monotone" dataKey="ingresos" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Temperaturas por Ciudad</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={temperaturas}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="ciudad" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="natural" dataKey="maxima" stroke="#ff7300" />
            <Line type="natural" dataKey="minima" stroke="#387908" />
            <Line type="natural" dataKey="media" stroke="#38abc8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineCharts;
