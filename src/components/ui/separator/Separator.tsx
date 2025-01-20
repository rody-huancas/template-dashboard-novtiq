import { FC } from "react";
import { cn } from "@/utils/general.util";

interface SeparatorProps {
  className?: string;
}

const Separator: FC<SeparatorProps> = ({ className }) => {
  return <hr className={cn("border-t border-slate-200", className)} />;
};

export default Separator;
