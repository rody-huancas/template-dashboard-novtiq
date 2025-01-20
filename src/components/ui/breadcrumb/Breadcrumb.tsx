import { FC } from "react";
import { cn } from "@/utils/general.util";

interface BreadcrumbProps {
  items: string[];
  className?: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav className={cn("flex space-x-2", className)}>
      {items.map((item, index) => (
        <span key={index} className="text-sm text-slate-600">
          {item}
          {index < items.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
