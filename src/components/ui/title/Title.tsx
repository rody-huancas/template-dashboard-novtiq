import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/general.util";

const titleVariants = cva(
  "font-medium tracking-tight leading-tight text-slate-900",
  {
    variants: {
      variant: {
        default: "text-dark-100",
        primary: "text-blue-600 dark:text-blue-400",
        secondary: "text-slate-600 dark:text-slate-400",
        destructive: "text-red-600 dark:text-red-400",
      },
      size: {
        h1: "text-4xl sm:text-5xl lg:text-6xl",
        h2: "text-3xl sm:text-4xl lg:text-5xl",
        h3: "text-2xl sm:text-3xl lg:text-4xl",
        h4: "text-xl sm:text-2xl lg:text-3xl",
        h5: "text-lg sm:text-xl lg:text-2xl",
        h6: "text-base sm:text-lg lg:text-xl",
      },
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      transform: {
        none: "normal-case",
        uppercase: "uppercase",
        lowercase: "lowercase",
        capitalize: "capitalize",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "h1",
      weight: "bold",
      align: "left",
      transform: "none",
    },
  }
);

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingTag = `h${HeadingLevel}`;
type HeadingElementType = Extract<keyof JSX.IntrinsicElements, HeadingTag>;

export interface TitleProps
  extends React.ComponentPropsWithRef<HeadingElementType>,
    VariantProps<typeof titleVariants> {
  level?: HeadingLevel;
  asChild?: boolean;
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  (
    { className, variant, size, weight, align, transform, level = 1, children, ...props }, ref
  ) => {
    const Tag = `h${level}` as HeadingElementType;

    const computedSize = size || `h${level}`;

    return (
      <Tag
        className={cn(
          titleVariants({
            variant,
            size: computedSize,
            weight,
            align,
            transform,
            className,
          })
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Title.displayName = "Title";

export { Title, titleVariants };
