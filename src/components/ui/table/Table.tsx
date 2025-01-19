import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import {
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  getPaginationRowModel,
} from "@tanstack/react-table";
/* Components */
import { TableBody } from "./TableBody";
import { Pagination } from "./TablePagination";
import { TableHeader } from "./TableHeader";
/* Styles */
import "@/styles/table.css";

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  noPaginate?: boolean;
}
const DataTable = <TData, TValue>({
  columns,
  data,
  noPaginate = false,
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pageSize, setPageSize] = useState(5);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
      pagination: { pageSize, pageIndex: 0 },
    },
  });

  return (
    <div className="space-y-4">
      <div className="custom-scrollbar rounded-lg border border-gray-100 bg-white shadow-sm">
        <table className="w-full">
          <TableHeader headerGroups={table.getHeaderGroups()} />
          <TableBody rows={table.getRowModel().rows} />
        </table>
      </div>

      {!noPaginate && (
        <Pagination
          table={table}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      )}
    </div>
  );
};

export default DataTable;
