import { cn } from "@/utils/general.util";
import { SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label         : string;
  options       : string[];
  selectedValue?: string;
}

const InputSelect = (args: Props) => {
  const { label, options, selectedValue, className, ...props } = args;

  return (
    <div className={cn("w-full space-y-2", className)}>
      <label className="block text-sm font-medium text-slate-900">
        {label}
      </label>
      <select
        className="w-full px-3 py-2 border rounded-md text-sm"
        value={selectedValue}
        {...props}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
