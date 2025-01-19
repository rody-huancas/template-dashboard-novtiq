import { Button } from "@/components/ui/button/Button";
import { ColumnDef } from "@tanstack/react-table";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

interface Contact {
  id: number;
  name: string;
  email: string;
  imageUrl: string;
  phoneNumber?: string;
  address?: string;
}

export const columnsUserList: ColumnDef<Contact>[] = [
  {
    accessorKey: "imageUrl",
    header: "Foto",
    cell: ({ row }) => {
      const imageUrl = row.getValue("imageUrl") as string;
      return (
        <div className="flex justify-center">
          <img
            src={imageUrl}
            alt="Foto de perfil"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "email",
    header: "Correo",
  },
  {
    accessorKey: "phoneNumber",
    header: "Teléfono",
    cell: ({ row }) => {
      const phoneNumber = row.getValue("phoneNumber") as string | undefined;
      return phoneNumber ? phoneNumber : "No registrado";
    },
  },
  {
    accessorKey: "address",
    header: "Dirección",
    cell: ({ row }) => {
      const address = row.getValue("address") as string | undefined;
      return address ? address : "No registrada";
    },
  },
  {
    accessorKey: "actions",
    header: "Acciones",
    cell: () => {
      return (
        <div className="flex justify-evenly items-center gap-2">
          <Button className="p-2 text-blue-500 bg-primary/10 hover:bg-primary hover:text-light-100">
            <FaEye />
          </Button>
          <Button className="p-2 text-green-500 bg-green-500/10 hover:bg-green-500 hover:text-light-100">
            <FaEdit />
          </Button>
          <Button className="p-2 text-red-500 bg-red-500/10 hover:bg-red-500 hover:text-light-100">
            <FaTrash />
          </Button>
        </div>
      );
    },
  },
];
