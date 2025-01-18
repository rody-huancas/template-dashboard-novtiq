import { cn } from "@/utils/general.util";
import { IconType } from "react-icons";

interface SidebarTabProps {
  icon    : IconType;
  label   : string;
  count   : number;
  isActive: boolean;
  onClick : () => void;
}

export const InboxSidebarTab = (props: SidebarTabProps) => {
  const { icon: Icon, label, count, isActive, onClick } = props;

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg",
        isActive ? "bg-blue-50" : "hover:bg-gray-100"
      )}
    >
      <Icon className="w-5 h-5" />
      <span className="flex-1 text-left">{label}</span>
      <span className="text-sm font-medium">{count}</span>
    </button>
  );
};
