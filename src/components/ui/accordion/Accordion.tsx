import { FC, useState } from "react";
import { cn } from "@/utils/general.util";

interface AccordionProps {
  items: { title: string; content: string }[];
  className?: string;
}

const Accordion: FC<AccordionProps> = ({ items, className }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-5", className)}>
      {items.map((item, index) => (
        <div key={index}>
          <div
            onClick={() => toggleItem(index)}
            className="cursor-pointer text-lg font-semibold"
          >
            {item.title}
          </div>
          {activeIndex === index && <div className="mt-2">{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
