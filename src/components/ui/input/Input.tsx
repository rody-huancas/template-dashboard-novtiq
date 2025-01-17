import { forwardRef, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/general.util";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const inputVariants = cva(
  "flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "shadow-sm",
        flat   : "border-transparent bg-light-200",
        ghost  : "border-transparent shadow-none",
      },
      size: {
        default: "h-10",
        sm     : "h-8 text-xs px-2.5",
        lg     : "h-12 text-base px-4",
      },
      state: {
        default: "",
        error  : "border-red-500 focus-visible:ring-red-500",
        success: "border-green-500 focus-visible:ring-green-500",
      },
    },
    defaultVariants: {
      variant: "default",
      size   : "default",
      state  : "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      variant,
      size,
      state,
      label,
      error,
      leftIcon,
      rightIcon,
      wrapperClassName,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

    const togglePassword = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className={cn("relative w-full", wrapperClassName)}>
        {label && (
          <label className="mb-2 block text-sm font-medium text-slate-900">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
              {leftIcon}
            </div>
          )}
          <input
            type={isPassword ? (showPassword ? "text" : "password") : type}
            className={cn(
              inputVariants({ variant, size, state }),
              leftIcon && "pl-10",
              (rightIcon || isPassword) && "pr-10",
              className
            )}
            ref={ref}
            {...props}
          />
          {(rightIcon || isPassword) && (
            <div
              className={cn(
                "absolute right-3 top-1/2 -translate-y-1/2",
                isPassword && "cursor-pointer"
              )}
              onClick={isPassword ? togglePassword : undefined}
            >
              {isPassword ? (
                showPassword ? (
                  <FaRegEyeSlash className="h-4 w-4 text-slate-500" />
                ) : (
                  <FaRegEye className="h-4 w-4 text-slate-500" />
                )
              ) : (
                rightIcon
              )}
            </div>
          )}
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
