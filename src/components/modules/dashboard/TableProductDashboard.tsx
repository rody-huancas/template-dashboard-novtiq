import DataTable from "@/components/ui/table/Table";
import { columnsProductDashboard } from "./columns-dashboard";
import { Title } from "@/components/ui/title/Title";

import { dashboardData } from "@/data/dashboardData";

const TableProductDashboard = () => {
  return (
    <div className="flex flex-col gap-5 p-5 rounded-lg bg-light-100">
      <Title size="h5">Últimos Productos</Title>

      <DataTable columns={columnsProductDashboard} data={dashboardData.table.data} />
    </div>
  );
};

export default TableProductDashboard;