import { ColumnDef } from "@tanstack/react-table";
import { StatusBadge } from "@/components/ui/status-bagde/StatusBadge";

export type Props = {
  id      : string;
  name    : string;
  address : string;
  dateTime: string;
  type    : number;
  status  : "Enviado" | "Pendiente" | "Cancelado";
};

export const columnsOrderList: ColumnDef<Props>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "dateTime",
    header: "Fecha",
  },
  {
    accessorKey: "type",
    header: "Tipo",
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return <StatusBadge status={status} />;
    },
  },
];
