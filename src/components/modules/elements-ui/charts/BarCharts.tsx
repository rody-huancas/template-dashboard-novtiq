import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const ventasPorProducto = [
  { producto: "Laptops", ventas: 4000, objetivo: 5000 },
  { producto: "Tablets", ventas: 3000, objetivo: 3500 },
  { producto: "Móviles", ventas: 2000, objetivo: 2500 },
  { producto: "Accesorios", ventas: 2780, objetivo: 2000 },
];

const datosRegionales = [
  { region: "Norte", ingresos: 4000, gastos: 2400, beneficio: 1600 },
  { region: "Sur", ingresos: 3000, gastos: 1398, beneficio: 1602 },
  { region: "Este", ingresos: 2000, gastos: 980, beneficio: 1020 },
  { region: "Oeste", ingresos: 2780, gastos: 1908, beneficio: 872 },
];

const edades = [
  { grupo: "18-24", hombres: 400, mujeres: 400 },
  { grupo: "25-34", hombres: 300, mujeres: 500 },
  { grupo: "35-44", hombres: 200, mujeres: 300 },
  { grupo: "45-54", hombres: 278, mujeres: 400 },
  { grupo: "55+", hombres: 189, mujeres: 250 },
];

const BarCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">
          Ventas vs Objetivo por Producto
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ventasPorProducto}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="producto" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="ventas" fill="#8884d8" />
            <Bar dataKey="objetivo" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">
          Métricas Financieras por Región
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={datosRegionales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="region" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="ingresos" stackId="a" fill="#8884d8" />
            <Bar dataKey="gastos" stackId="a" fill="#82ca9d" />
            <Bar dataKey="beneficio" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">
          Distribución por Edad y Género
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart layout="vertical" data={edades}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="grupo" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="hombres" fill="#8884d8" />
            <Bar dataKey="mujeres" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarCharts;
