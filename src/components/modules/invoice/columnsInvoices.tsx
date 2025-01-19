import { ColumnDef } from "@tanstack/react-table";

export type Props = {
  serial     : number;
  description: string;
  quantity   : number;
  baseCost   : string;
  totalCost  : string;
};

export const columnsInvoices: ColumnDef<Props>[] = [
  {
    accessorKey: "serial",
    header: "Serie",
  },
  {
    accessorKey: "description",
    header: "Descripción",
  },
  {
    accessorKey: "quantity",
    header: "Cantidad",
  },
  {
    accessorKey: "baseCost",
    header: "Costo Base",
  },
  {
    accessorKey: "totalCost",
    header: "Costo Total",
  },
];
