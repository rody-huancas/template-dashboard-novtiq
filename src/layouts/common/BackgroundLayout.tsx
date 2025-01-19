import { ReactNode } from "react";

interface BackgroundLayoutProps {
  children: ReactNode;
}

const BackgroundLayout = ({ children }: BackgroundLayoutProps) => {
  return (
    <div className="min-h-screen relative bg-primary flex items-center justify-center p-4">
      <img
        src="/background.svg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="w-full h-full overflow-y-auto z-20 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default BackgroundLayout;
