import { FC } from "react";
import { cn } from "@/utils/general.util";

interface AvatarProps {
  src: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Avatar: FC<AvatarProps> = ({ src, alt = "Avatar", size = "md", className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "rounded-full object-cover",
        size === "sm" && "w-8 h-8",
        size === "md" && "w-12 h-12",
        size === "lg" && "w-16 h-16",
        className
      )}
    />
  );
};

export default Avatar;
