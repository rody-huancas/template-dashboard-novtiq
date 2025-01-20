import { TextareaHTMLAttributes } from "react";
import { cn } from "@/utils/general.util";

interface Props
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  label?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outlined" | "ghost";
}

const Textarea = (args: Props) => {
  const { label, className, error, size = "md", variant = "default", ...props } = args;
  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-sm",
    lg: "px-4 py-3 text-base",
  };

  const variantStyles = {
    default: "border border-slate-300 focus:ring focus:ring-slate-300",
    outlined: "border border-slate-500 focus:ring focus:ring-slate-500",
    ghost: "border-none bg-transparent focus:ring focus:ring-slate-300",
  };

  return (
    <div className={cn("w-full space-y-2", className)}>
      {label && (
        <label className="block text-sm font-medium text-slate-900">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          "w-full rounded-md focus:outline-none",
          sizeStyles[size],
          variantStyles[variant],
          error ? "border-red-500 focus:ring-red-500" : "",
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Textarea;
