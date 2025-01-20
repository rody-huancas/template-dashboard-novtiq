import { cn } from "@/utils/general.util";
import { SelectHTMLAttributes, ReactNode } from "react";

interface Option {
  value: string;
  label: ReactNode;
}

interface Props extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  options: Option[];
  selectedValue?: string;
  error?: string;
  wrapperClassName?: string;
  variant?: "default" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
}

const InputSelect = (args: Props) => {
  const { label, options, selectedValue, className, wrapperClassName, error, variant = "default", size = "md", ...props } = args;
  const variantStyles = {
    default: "border border-slate-200 bg-white focus:ring-slate-950",
    outlined: "border-2 border-slate-500 bg-white focus:ring-slate-700",
    ghost: "border-transparent bg-transparent shadow-none focus:ring-slate-500",
  };

  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  };

  return (
    <div className={cn("w-full space-y-2", wrapperClassName)}>
      {label && (
        <label className="block text-sm font-medium text-slate-900">
          {label}
        </label>
      )}
      <select
        className={cn(
          "w-full rounded-md focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
          variantStyles[variant],
          sizeStyles[size],
          error && "border-red-500 focus:ring-red-500",
          className
        )}
        value={selectedValue}
        {...props}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default InputSelect;
