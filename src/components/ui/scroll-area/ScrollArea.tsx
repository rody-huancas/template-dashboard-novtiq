import { FC } from "react";
import { cn } from "@/utils/general.util";

interface ScrollAreaProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollArea: FC<ScrollAreaProps> = ({ children, className }) => {
  return <div className={cn("overflow-y-auto", className)}>{children}</div>;
};

export default ScrollArea;
