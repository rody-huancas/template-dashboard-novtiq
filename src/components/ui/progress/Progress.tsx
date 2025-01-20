import { FC } from "react";
import { cn } from "@/utils/general.util";

interface ProgressProps {
  value: number;
  max: number;
  className?: string;
}

const Progress: FC<ProgressProps> = ({ value, max, className }) => {
  return (
    <div className={cn("w-full bg-gray-200 rounded-md", className)}>
      <div
        className="h-2 bg-blue-500 rounded-md"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  );
};

export default Progress;
