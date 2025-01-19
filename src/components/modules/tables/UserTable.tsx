import DataTable from "@/components/ui/table/Table";
import { contactData } from "@/data/contactData";
import { columnsUserList } from "./userTableColumns";


export const UserTable = () => {
  return (
    <div className="space-y-5">
      <DataTable columns={columnsUserList} data={contactData} />
    </div>
  );
};

export default UserTable;
