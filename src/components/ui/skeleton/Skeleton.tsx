import { FC } from "react";
import { cn } from "@/utils/general.util";

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
}

const Skeleton: FC<SkeletonProps> = ({
  width = "100%",
  height = "20px",
  className,
}) => {
  return (
    <div
      className={cn("animate-pulse bg-gray-300 rounded", className)}
      style={{ width: width, height: height }}
    />
  );
};

export default Skeleton;
