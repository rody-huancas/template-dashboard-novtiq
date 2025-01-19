import { InputHTMLAttributes } from "react";
import { cn } from "@/utils/general.util";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const RadioButton = (args: Props) => {
  const { label, className, id, ...props } = args;

  return (
    <div className={cn("w-full flex items-center justify-center gap-3", className)}>
      <input id={id} type="radio" className="form-radio" {...props} />
      <label htmlFor={id} className="block text-sm font-medium text-slate-900">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
