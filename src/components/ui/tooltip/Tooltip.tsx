import { FC } from "react";
import { cn } from "@/utils/general.util";

interface TooltipProps {
  content: string;
  position?: "top" | "right" | "bottom" | "left";
  className?: string;
}

const Tooltip: FC<TooltipProps> = ({ content, position = "top", className }) => {
  return (
    <div className={cn("relative inline-block", className)}>
      <div
        className={cn(
          "absolute whitespace-nowrap bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          position === "top" && "bottom-full mb-2",
          position === "right" && "left-full ml-2",
          position === "bottom" && "top-full mt-2",
          position === "left" && "right-full mr-2"
        )}
      >
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
