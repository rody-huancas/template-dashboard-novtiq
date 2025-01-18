import { Table } from "@tanstack/react-table";
import { cn } from "@/utils/general.util";
import { MdFirstPage, MdLastPage, MdChevronLeft, MdChevronRight } from "react-icons/md";

interface PaginationProps<TData> {
  table: Table<TData>;
  pageSize: number;
  setPageSize: (size: number) => void;
}

export const Pagination = <TData,>({
  table,
  pageSize,
  setPageSize,
}: PaginationProps<TData>) => {
  return (
    <div className="flex items-center justify-between gap-2 text-sm">
      <div className="flex items-center gap-2">
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="rounded-md border border-gray-200 bg-white px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        >
          {[5, 10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              {size} filas
            </option>
          ))}
        </select>
        <span className="text-sm text-gray-500">
          Pág. {table.getState().pagination.pageIndex + 1} de{" "}
          {table.getPageCount()}
        </span>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
          className={cn(
            "rounded-md p-1 hover:bg-gray-100",
            !table.getCanPreviousPage() && "opacity-50"
          )}
        >
          <MdFirstPage className="h-5 w-5" />
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className={cn(
            "rounded-md p-1 hover:bg-gray-100",
            !table.getCanPreviousPage() && "opacity-50"
          )}
        >
          <MdChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className={cn(
            "rounded-md p-1 hover:bg-gray-100",
            !table.getCanNextPage() && "opacity-50"
          )}
        >
          <MdChevronRight className="h-5 w-5" />
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
          className={cn(
            "rounded-md p-1 hover:bg-gray-100",
            !table.getCanNextPage() && "opacity-50"
          )}
        >
          <MdLastPage className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
