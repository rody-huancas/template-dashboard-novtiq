import { Title } from "@/components/ui/title/Title";
import { MetricCard } from "@/components/modules/dashboard/MetricCard";
import SalesDetailChart from "@/components/modules/dashboard/SalesDetailChart";

import { FaBoxOpen } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { LuChartSpline } from "react-icons/lu";
import SalesAndProfitChart from "@/components/modules/dashboard/SalesAndProfitChart";
import SalesDistributionChart from "@/components/modules/dashboard/SalesDistributionChart";

const Dashboard = () => {
  return (
    <div className="space-y-5">
      <Title level={3} size="h3">
        Dashboard
      </Title>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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

      <div className="grid lg:grid-cols-3 gap-x-10">
        <div className="w-full h-full col-span-2">
          <SalesDetailChart />
        </div>

        <div className="w-full h-full">
          <SalesDistributionChart />
        </div>
      </div>

      <div className="w-full h-full">
        <SalesAndProfitChart />
      </div>
    </div>
  );
};

export default Dashboard;
