import { cn } from "@/utils/general.util";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputDate = (args: Props) => {
  const { label, className, ...props } = args;

  return (
    <div className={cn("w-full space-y-2", className)}>
      <label className="block text-sm font-medium text-slate-900">
        {label}
      </label>
      <input
        type="date"
        className="w-full px-3 py-2 border rounded-md text-sm"
        {...props}
      />
    </div>
  );
};

export default InputDate;
