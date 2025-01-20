import { FC, useState } from "react";
import { cn } from "@/utils/general.util";

interface CollapsibleProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Collapsible: FC<CollapsibleProps> = ({ trigger, children, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("space-y-2", className)}>
      <div className="cursor-pointer" onClick={() => setOpen(!open)}>
        {trigger}
      </div>
      {open && <div>{children}</div>}
    </div>
  );
};

export default Collapsible;
