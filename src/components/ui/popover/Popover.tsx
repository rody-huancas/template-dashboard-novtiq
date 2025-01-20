import { FC, useState } from "react";
import { cn } from "@/utils/general.util";

interface PopoverProps {
  content: string;
  trigger: React.ReactNode;
  className?: string;
}

const Popover: FC<PopoverProps> = ({ content, trigger, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative inline-block", className)}>
      <div onClick={() => setOpen(!open)}>{trigger}</div>
      {open && (
        <div className="absolute top-full mt-2 bg-white border rounded-md shadow-lg p-2 w-max">
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
