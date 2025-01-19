import DataTable from "@/components/ui/table/Table";
import { Title } from "@/components/ui/title/Title";
import { columnsOrderList } from "@/components/modules/order-list/columnsOrderList";
import { orderListData } from "@/data/order-list";
import { Input } from "@/components/ui/input/Input";
import { Button } from "@/components/ui/button/Button";

const OrderListPage = () => {
  return (
    <div className="space-y-5">
      <Title level={3} size="h3">
        Lista de Pedidos
      </Title>

      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10">
          <Input placeholder="Ingrese el nombre" label="Nombre" />
          <Input placeholder="Ingrese el Tipo" label="Tipo" />
          <Input placeholder="Seleccione la Fecha" type="date" label="Tipo" />
        </div>

        <div className="flex justify-end">
          <Button size="lg">Filtrar</Button>
        </div>
      </div>

      <div className="flex flex-col gap-5 p-5 rounded-lg bg-light-100 overflow-x-scroll custom-scrollbar">
        <DataTable columns={columnsOrderList} data={orderListData} />
      </div>
    </div>
  );
};

export default OrderListPage;
