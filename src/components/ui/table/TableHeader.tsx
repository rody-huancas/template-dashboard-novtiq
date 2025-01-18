import { flexRender, HeaderGroup } from "@tanstack/react-table";
import { cn } from "@/utils/general.util";

interface TableHeaderProps<TData> {
  headerGroups: HeaderGroup<TData>[];
}

export const TableHeader = <TData,>({
  headerGroups,
}: TableHeaderProps<TData>) => {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              className={cn(
                "sticky top-0 border-b border-gray-100 bg-gray-50/50 px-6 py-4 text-left text-sm font-medium text-gray-600 transition-colors backdrop-blur-sm whitespace-nowrap overflow-hidden text-ellipsis",
                header.column.getCanSort() && "cursor-pointer hover:bg-gray-50"
              )}
              onClick={header.column.getToggleSortingHandler()}
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
