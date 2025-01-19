import { InputHTMLAttributes } from "react";
import { cn } from "@/utils/general.util";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox = (args: Props) => {
  const { label, className, id, ...props } = args;

  return (
    <div className={cn("w-full flex items-center gap-3", className)}>
      <input id={id} type="checkbox" className="w-5 h-5" {...props} />
      <label htmlFor={id} className="flex text-sm font-medium text-slate-900 cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
