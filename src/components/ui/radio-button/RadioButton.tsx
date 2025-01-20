import { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/general.util";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label: ReactNode;
  error?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outlined" | "ghost";
}

const RadioButton = (args: Props) => {
  const { label, className, id, size = "md", variant = "default", error, ...props } = args;
  const sizeStyles = {
    sm: "w-4 h-4 text-xs",
    md: "w-5 h-5 text-sm",
    lg: "w-6 h-6 text-base",
  };

  const variantStyles = {
    default: "text-slate-900 border-slate-300",
    outlined: "border border-slate-300",
    ghost: "bg-transparent",
  };

  return (
    <div className={cn("w-full flex items-center gap-3", className)}>
      <input
        id={id}
        type="radio"
        className={cn(
          "form-radio rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-slate-900",
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
        {...props}
      />
      <label
        htmlFor={id}
        className="text-sm font-medium text-slate-900 cursor-pointer"
      >
        {label}
      </label>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default RadioButton;
