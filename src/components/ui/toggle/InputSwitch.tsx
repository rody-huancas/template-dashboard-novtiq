import { cn } from "@/utils/general.util";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputSwitch = (args: Props) => {
  const { label, className, ...props } = args;

  return (
    <div className={cn("w-full space-y-2", className)}>
      <label className="block text-sm font-medium text-slate-900">
        {label}
      </label>
      <input type="checkbox" className="form-switch" {...props} />
    </div>
  );
};

export default InputSwitch;
