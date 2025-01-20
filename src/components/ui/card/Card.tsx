import { FC } from "react";
import { cn } from "@/utils/general.util";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ title, children, className }) => {
  return (
    <div className={cn("border rounded-lg p-4 bg-white shadow-md", className)}>
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
