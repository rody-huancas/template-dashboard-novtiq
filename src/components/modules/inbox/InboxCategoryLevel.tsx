import { cn } from "@/utils/general.util";
import { Category } from "./types";

interface CategoryLabelProps {
  category: Category;
}

export const InboxCategoryLevel = ({ category }: CategoryLabelProps) => {
  return (
    <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
      <div className={cn("w-3 h-3 rounded-sm", category.color)} />
      <span>{category.name}</span>
    </button>
  );
};
