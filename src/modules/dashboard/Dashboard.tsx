import { Title } from "@/components/ui/title/Title";
import { MetricCard } from "@/components/modules/dashboard/MetricCard";

import { FaBoxOpen } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { LuChartSpline } from "react-icons/lu";

const Dashboard = () => {
  return (
    <div className="space-y-5">
      <Title level={3} size="h3">
        Dashboard
      </Title>

      <div className="grid grid-cols-4 gap-5">
        <MetricCard
          icon={HiMiniUsers}
          title="Usuarios Totales"
          value="40.404"
          trend={{ value: 8.5, text: "desde ayer", isPositive: true }}
          iconColor="indigo"
        />
        <MetricCard
          icon={FaBoxOpen}
          title="Ordenes Totales"
          value="1421"
          trend={{
            value: 9.5,
            text: "desde la semana pasada",
            isPositive: true,
          }}
          iconColor="yellow"
        />
        <MetricCard
          icon={LuChartSpline}
          title="Ventas Totales"
          value="$89.000"
          trend={{ value: 1.4, text: "bajo desde ayer", isPositive: false }}
          iconColor="green"
        />
        <MetricCard
          icon={HiMiniUsers}
          title="Pendientes totales"
          value="2040"
          trend={{ value: 1.8, text: "desde ayer", isPositive: true }}
          iconColor="orange"
        />
      </div>
    </div>
  );
};

export default Dashboard;
