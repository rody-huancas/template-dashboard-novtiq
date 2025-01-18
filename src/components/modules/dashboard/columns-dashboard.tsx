import { ColumnDef } from "@tanstack/react-table";
import { formatMoney } from "@/utils/general.util";
import { StatusBadge } from "@/components/ui/status-bagde/StatusBadge";

export type PropsProductDashboard = {
  id         : string;
  productName: string;
  location   : string;
  dateTime   : string;
  piece      : number;
  amount     : number;
  status     : "Enviado" | "Pendiente" | "Cancelado";
  image?     : string;
};

export const columnsProductDashboard: ColumnDef<PropsProductDashboard>[] = [
  {
    accessorKey: "productName",
    header: "Nombre",
    cell: ({ row }) => {
      const product = row.original;
      return (
        <div className="flex items-center gap-3">
          {product.image && (
            <img
              src={product.image}
              alt={product.productName}
              className="h-10 w-10 rounded-full object-cover"
            />
          )}
          <span>{product.productName}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "location",
    header: "Ubicación",
  },
  {
    accessorKey: "dateTime",
    header: "Fecha",
  },
  {
    accessorKey: "piece",
    header: "Cantidad",
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Precio</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      return (
        <div className="text-right font-medium">{formatMoney(amount)}</div>
      );
    },
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
