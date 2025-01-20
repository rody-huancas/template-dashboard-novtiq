import { FC, useState } from "react";
import { cn } from "@/utils/general.util";

interface SheetProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

const Sheet: FC<SheetProps> = ({ children, title, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Sheet</button>
      {open && (
        <div
          className={cn(
            "fixed inset-0 z-50 bg-gray-900 bg-opacity-50",
            className
          )}
          onClick={() => setOpen(false)}
        >
          <div
            className="fixed bottom-0 left-0 w-full bg-white p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold">{title}</h2>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sheet;
