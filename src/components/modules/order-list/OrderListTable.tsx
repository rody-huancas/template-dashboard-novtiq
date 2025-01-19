import DataTable from "@/components/ui/table/Table";
import { orderListData } from "@/data/order-list";
import { columnsOrderList } from "./columnsOrderList";

export const OrderListTable = () => {
  return (
    <div className="flex flex-col gap-5 p-5 rounded-lg bg-light-100 overflow-x-scroll custom-scrollbar">
      <DataTable columns={columnsOrderList} data={orderListData} />
    </div>
  );
};
