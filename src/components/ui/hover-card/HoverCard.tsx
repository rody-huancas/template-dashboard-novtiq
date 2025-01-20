import { FC, useState } from "react";
import { cn } from "@/utils/general.util";

interface HoverCardProps {
  content: string;
  children: React.ReactNode;
  className?: string;
}

const HoverCard: FC<HoverCardProps> = ({ content, children, className }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      {hovered && (
        <div className="absolute top-full mt-2 bg-white border rounded-md shadow-lg p-2 w-max">
          {content}
        </div>
      )}
    </div>
  );
};

export default HoverCard;
