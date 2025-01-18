import { cn } from "@/utils/general.util";
import React from "react";

type StatusBadgeProps = {
  status: string;
};

const statusStyles: Record<string, string> = {
  Enviado: "bg-green-100 text-green-800",
  Pendiente  : "bg-yellow-100 text-yellow-800",
  Cancelado: "bg-red-100 text-red-800",
  Default  : "bg-gray-100 text-gray-800",
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2 py-1 text-xs font-semibold",
        statusStyles[status] || statusStyles["Default"]
      )}
    >
      {status}
    </span>
  );
};

