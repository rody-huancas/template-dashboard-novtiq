import { flexRender, Row } from "@tanstack/react-table";

interface TableBodyProps<TData> {
  rows: Row<TData>[];
}

export const TableBody = <TData,>({ rows }: TableBodyProps<TData>) => {
  return (
    <tbody>
      {rows.map((row) => (
        <tr
          key={row.id}
          className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50"
        >
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id} className="px-6 py-4 text-sm text-gray-600">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
