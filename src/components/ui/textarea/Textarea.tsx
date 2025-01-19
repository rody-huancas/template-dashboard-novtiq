import { TextareaHTMLAttributes } from "react";
import { cn } from "@/utils/general.util";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Textarea = (args: Props) => {
  const { label, className, ...props } = args;

  return (
    <div className={cn("w-full space-y-2", className)}>
      {label && (
        <label className="block text-sm font-medium text-slate-900">
          {label}
        </label>
      )}
      <textarea
        className="w-full px-3 py-2 border rounded-md text-sm"
        {...props}
      />
    </div>
  );
};

export default Textarea;
