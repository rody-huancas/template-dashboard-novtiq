import DataTable from "@/components/ui/table/Table";
import { columnsInvoices } from "./columnsInvoices";
import { invoiceData } from "@/data/invoiceData";
import { formatMoney } from "@/utils/general.util";

const TableInvoice = () => {
  const getNumericValue = (formattedString: string): number => {
    return Number(formattedString.replace(/[^0-9.-]+/g, ''));
  };

  const totalSum = invoiceData.reduce((acc, item) => {
    return acc + getNumericValue(item.totalCost);
  }, 0);

  return (
    <div className="flex flex-col gap-5 p-5 rounded-lg bg-light-100 overflow-x-scroll custom-scrollbar">
      <DataTable columns={columnsInvoices} data={invoiceData} noPaginate />
      
      <div className="flex justify-end items-center gap-5 px-20">
        <p className="font-bold text-lg">Total:</p>
        <span className="font-medium text-xl">{formatMoney(totalSum)}</span>
      </div>
    </div>
  );
};

export default TableInvoice;