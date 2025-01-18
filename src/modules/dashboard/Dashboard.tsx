import { Title } from "@/components/ui/title/Title";
import { MetricCard } from "@/components/modules/dashboard/MetricCard";
import SalesDetailChart from "@/components/modules/dashboard/SalesDetailChart";
import SalesAndProfitChart from "@/components/modules/dashboard/SalesAndProfitChart";
import TableProductDashboard from "@/components/modules/dashboard/TableProductDashboard";
import SalesDistributionChart from "@/components/modules/dashboard/SalesDistributionChart";

import { cn } from "@/utils/general.util";
import { dashboardData } from "@/data/dashboardData";
import { useThemeStore } from "@/store/theme/useTheme";

const Dashboard = () => {
  const menuIsOpen = useThemeStore((state) => state.menuIsOpen);

  return (
    <div className="space-y-5">
      <Title level={3} size="h3">
        Dashboard
      </Title>

      <div
        className={cn(
          "grid sm:grid-cols-2 xl:grid-cols-4 gap-5",
          menuIsOpen && "sm:grid-cols-1 md:grid-cols-2"
        )}
      >
        {dashboardData.metrics.map((metric, index) => (
          <MetricCard
            key={index}
            icon={metric.icon}
            title={metric.title}
            value={metric.value}
            trend={metric.trend}
            iconColor={metric.iconColor}
          />
        ))}
      </div>

      <div
        className={cn(
          "grid lg:grid-cols-2 xl:grid-cols-3 gap-5",
          menuIsOpen && "lg:grid-cols-1"
        )}
      >
        <div className="w-full h-full xl:col-span-2">
          <SalesDetailChart />
        </div>

        <div className="w-full h-full">
          <SalesDistributionChart />
        </div>
      </div>

      <div className="w-full h-full">
        <SalesAndProfitChart />
      </div>

      <TableProductDashboard />
    </div>
  );
};

export default Dashboard;
