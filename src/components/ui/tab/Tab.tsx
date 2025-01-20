import { useState } from "react";
import { cn } from "@/utils/general.util";

interface TabProps {
  tabs: {
    label: string;
    content: React.ReactNode;
  }[];
  className?: string;
}

export const TabsElements = ({ tabs, className }: TabProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex flex-wrap gap-2 border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-t-lg transition-colors",
              activeTab === index
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="pt-4">{tabs[activeTab].content}</div>
    </div>
  );
};
